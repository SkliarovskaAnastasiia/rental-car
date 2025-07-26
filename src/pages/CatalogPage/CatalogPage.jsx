import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCars } from '../../redux/cars/operations';
import { FiltersForm, CarsList } from '@components';
import { Box } from '@mui/material';
import { useSearchParams } from 'react-router';
import {
  selectError,
  selectIsLoading,
  selectTotalPages,
} from '../../redux/cars/selectors';
import { CustomButton } from '@UI';
import { Loader } from '@UI';
import { resetCars } from '../../redux/cars/slice';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const totalPages = useSelector(selectTotalPages);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const filters = useMemo(
    () => ({
      brand: searchParams.get('brand') || '',
      rentalPrice: searchParams.get('rentalPrice') || '',
      minMileage: searchParams.get('minMileage') || '',
      maxMileage: searchParams.get('maxMileage') || '',
    }),
    [searchParams]
  );

  const [page, setPage] = useState(1);

  const handleFiltersChange = newFilters => {
    dispatch(resetCars());
    setSearchParams({
      ...newFilters,
      page: '1',
    });
  };

  const handleLoadMoreClick = () => {
    const next = page + 1;
    setPage(next);
  };

  useEffect(() => {
    dispatch(getAllCars({ ...filters, page }));
  }, [dispatch, filters, page]);

  return (
    <Box sx={{ padding: '84px 120px 124px' }}>
      <FiltersForm onFiltersChange={handleFiltersChange} filters={filters} />
      {!error && <CarsList />}
      {isLoading && <Loader />}
      {!isLoading && !error && totalPages > page && (
        <CustomButton
          text="Load more"
          isContained={false}
          onClick={handleLoadMoreClick}
          sx={{
            paddingInline: '38px',
            display: 'block',
            marginInline: 'auto',
          }}
        />
      )}
    </Box>
  );
};

export default CatalogPage;
