import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCarById } from '../../redux/car/operations';
import { useParams } from 'react-router';
import { Box, Grid, Stack } from '@mui/material';
import { BookForm, CarInfo } from '@components';
import {
  selectCarInfo,
  selectError,
  selectLoading,
} from '../../redux/car/selectors';

const CarPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(getCarById(id));
  }, [dispatch, id]);

  const carInfo = useSelector(selectCarInfo);

  return (
    <Grid
      container
      sx={{ padding: '84px 120px 104px', columnGap: '72px', rowGap: '40px' }}
    >
      <Grid>
        <Stack sx={{ gap: '40px' }}>
          <Box
            component="img"
            src={carInfo.img}
            alt={carInfo.description}
            sx={{
              borderRadius: '19px',
              width: '640px',
              height: '512px',
            }}
          />

          <BookForm />
        </Stack>
      </Grid>

      <Grid>{!loading && !error && <CarInfo carInfo={carInfo} />}</Grid>
    </Grid>
  );
};
export default CarPage;
