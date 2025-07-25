import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCars } from '../../redux/cars/operations';
import { FiltersForm, CarsList } from '@components';
import { Box } from '@mui/material';
import { useSearchParams } from 'react-router';
import { selectTotalPages } from '../../redux/cars/selectors';
import { CustomButton } from '@UI';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const totalPages = useSelector(selectTotalPages);

  const filters = useMemo(
    () => ({
      brand: searchParams.get('brand') || '',
      rentalPrice: searchParams.get('rentalPrice') || '',
      minMileage: searchParams.get('minMileage') || '',
      maxMileage: searchParams.get('maxMileage') || '',
    }),
    [searchParams]
  );

  const page = parseInt(searchParams.get('page')) || 1;

  const handleFiltersChange = newFilters => {
    setSearchParams({
      ...newFilters,
      page: '1',
    });
  };

  const handleLoadMoreClick = () => {
    const updatedParams = new URLSearchParams(searchParams);
    updatedParams.set('page', page + 1);
    setSearchParams(updatedParams);
  };

  useEffect(() => {
    dispatch(getAllCars({ ...filters, page }));
  }, [dispatch, filters, page]);

  return (
    <Box sx={{ padding: '84px 120px 124px' }}>
      <FiltersForm onFiltersChange={handleFiltersChange} filters={filters} />
      <CarsList />
      {totalPages > page && (
        <CustomButton
          text="Load more"
          isContained={false}
          onClick={handleLoadMoreClick}
          sx={{ paddingInline: '38px', display: 'block', marginInline: 'auto' }}
        />
      )}
    </Box>
  );
};

export default CatalogPage;
