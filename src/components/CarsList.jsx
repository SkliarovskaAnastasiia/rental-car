import { useSelector } from 'react-redux';
import { selectCars } from '../redux/cars/selectors';
import { List, ListItem } from '@mui/material';
import { CarsCard } from './CarsCard';

export const CarsList = () => {
  const cars = useSelector(selectCars);
  console.log(cars);
  return (
    <List
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        columnGap: '32px',
        rowGap: '48px',
        marginBottom: '80px',
        padding: '0',
      }}
    >
      {cars?.map(car => (
        <ListItem key={car.id} sx={{ width: 'calc((100% - 96px) / 4)' }}>
          <CarsCard car={car} />
        </ListItem>
      ))}
    </List>
  );
};
