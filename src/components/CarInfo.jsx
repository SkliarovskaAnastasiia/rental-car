import { Box, List, ListItem, Stack, Typography } from '@mui/material';
import { palette } from '../theme/palette';
import { LocationIcon, CheckCircle } from '@assets';
import { formatMileage } from '../utils/formatMileage';
import { CalendarIcon, CarIcon, FuelPumpIcon, GearIcon } from '../assets';

export const CarInfo = ({ carInfo }) => {
  const {
    brand,
    model,
    year,
    address = '',
    mileage,
    rentalPrice,
    description,
    rentalConditions = [],
    type = '',
    fuelConsumption,
    engineSize,
    functionalities = [],
    accessories = [],
  } = carInfo;

  const [_, city, country] = address.split(',');

  const textStyles = {
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '1.25',
    color: palette.black.main,
  };

  return (
    <Box sx={{ width: '488px', paddingTop: '20px' }}>
      <Typography
        sx={{
          fontWeight: 600,
          fontSize: '24px',
          lineHeight: '1.33',
          color: palette.black.main,
          marginBottom: '8px',
        }}
      >
        {`${brand} ${model}, ${year}`}
      </Typography>

      <Stack
        sx={{
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: '16px',
        }}
      >
        <LocationIcon styles={{ width: '16px', height: '16px' }} />
        <Typography
          sx={{ ...textStyles, marginLeft: '4px', marginRight: '16px' }}
        >{`${city}, ${country}`}</Typography>
        <Typography sx={{ ...textStyles }}>{`Mileage: ${formatMileage(
          mileage
        )} km`}</Typography>
      </Stack>

      <Typography
        sx={{
          fontWeight: 600,
          fontSize: '24px',
          lineHeight: '1.33',
          color: palette.blue.main,
          marginBottom: '32px',
        }}
      >{`$${rentalPrice}`}</Typography>

      <Typography sx={{ ...textStyles, marginBottom: '68px' }}>
        {description}
      </Typography>

      <Typography
        sx={{
          fontWeight: 600,
          fontSize: '20px',
          lineHeight: '1.2',
          color: palette.black.main,
          marginBottom: '20px',
        }}
      >
        Rental Conditions:
      </Typography>

      <List sx={{ padding: '0', marginBottom: '110px' }}>
        {rentalConditions.map(item => (
          <ListItem key={item} sx={{ padding: '0', marginBottom: '16px' }}>
            <CheckCircle styles={{ width: '16px', height: '16px' }} />
            <Typography sx={{ ...textStyles, marginLeft: '8px' }}>
              {item}
            </Typography>
          </ListItem>
        ))}
      </List>

      <Typography
        sx={{
          fontWeight: 600,
          fontSize: '20px',
          lineHeight: '1.2',
          color: palette.black.main,
          marginBottom: '20px',
        }}
      >
        Car Specifications:
      </Typography>

      <List sx={{ padding: '0', marginBottom: '110px' }}>
        <ListItem sx={{ padding: '0', marginBottom: '16px' }}>
          <CalendarIcon styles={{ width: '16px', height: '16px' }} />
          <Typography
            sx={{ ...textStyles, marginLeft: '8px' }}
          >{`Year: ${year}`}</Typography>
        </ListItem>
        <ListItem sx={{ padding: '0', marginBottom: '16px' }}>
          <CarIcon styles={{ width: '16px', height: '16px' }} />
          <Typography
            sx={{
              ...textStyles,
              marginLeft: '8px',
              textTransform: 'capitalize',
            }}
          >{`Type: ${type.toLowerCase()}`}</Typography>
        </ListItem>
        <ListItem sx={{ padding: '0', marginBottom: '16px' }}>
          <FuelPumpIcon styles={{ width: '16px', height: '16px' }} />
          <Typography
            sx={{
              ...textStyles,
              marginLeft: '8px',
              textTransform: 'capitalize',
            }}
          >{`Fuel Consumption: ${fuelConsumption}`}</Typography>
        </ListItem>
        <ListItem sx={{ padding: '0', marginBottom: '16px' }}>
          <GearIcon styles={{ width: '16px', height: '16px' }} />
          <Typography
            sx={{
              ...textStyles,
              marginLeft: '8px',
              textTransform: 'capitalize',
            }}
          >{`Engine Size: ${engineSize}`}</Typography>
        </ListItem>
      </List>

      <Typography
        sx={{
          fontWeight: 600,
          fontSize: '20px',
          lineHeight: '1.2',
          color: palette.black.main,
          marginBottom: '20px',
        }}
      >
        Accessories and functionalities:
      </Typography>

      <List sx={{ padding: '0', marginBottom: '110px' }}>
        {[...accessories, ...functionalities].map(item => (
          <ListItem key={item} sx={{ padding: '0', marginBottom: '16px' }}>
            <CheckCircle styles={{ width: '16px', height: '16px' }} />
            <Typography sx={{ ...textStyles, marginLeft: '8px' }}>
              {item}
            </Typography>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
