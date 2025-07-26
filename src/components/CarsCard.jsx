import { palette } from '../theme/palette';
import { Box, IconButton, Typography } from '@mui/material';
import { CustomButton } from '@UI';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { selectFavorites } from '../redux/favorites/selectors';
import { SavedIcon, UnsavedIcon } from '@assets';
import { addToFavorites, deleteFromFavorites } from '../redux/favorites/slice';
import { formatMileage } from '../utils/formatMileage';

export const CarsCard = ({ car }) => {
  const {
    id,
    img,
    description,
    brand,
    model,
    year,
    rentalPrice,
    address,
    rentalCompany,
    type,
    mileage,
  } = car;

  const [_, city, country] = address.split(',');

  const navigate = useNavigate();

  const handleReadMoreBtn = () => {
    navigate(`/catalog/${id}`);
  };

  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const isFavorite = favorites.includes(id);

  const handleFavoritesChange = () => {
    isFavorite
      ? dispatch(deleteFromFavorites(id))
      : dispatch(addToFavorites(id));
  };

  const textStyles = {
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '1.25',
    color: palette.black.main,
  };

  const subTextStyles = {
    fontWeight: 400,
    fontSize: '12px',
    lineHeight: '1.33',
    color: '#8d929a',
  };

  const afterElem = {
    '&::after': {
      content: '"|"',
      display: 'inline-block',
      color: palette.white[300],
      marginInline: '6px',
      width: '2px',
      height: '16px',
    },
  };

  return (
    <Box>
      <Box
        component="img"
        src={img}
        alt={description}
        sx={{
          backgroundImage:
            'linear-gradient(180deg, rgba(18, 20, 23, 0.5) 0%, rgba(18, 20, 23, 0.5) 100%)',
          borderRadius: '14px',
          width: '276px',
          height: '268px',
          objectFit: 'cover',
          marginBottom: '16px',
          position: 'relative',
        }}
      />

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '8px',
        }}
      >
        <Typography sx={{ ...textStyles }}>
          {brand}
          <Typography
            component="span"
            sx={{ color: palette.blue.main }}
          >{`${model}, `}</Typography>
          {year}
        </Typography>
        <Typography sx={{ ...textStyles }}>{`$${rentalPrice}`}</Typography>
      </Box>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', marginBottom: '28px' }}>
        <Typography sx={{ ...subTextStyles, ...afterElem }}>{city}</Typography>
        <Typography sx={{ ...subTextStyles, ...afterElem }}>
          {country}
        </Typography>
        <Typography
          sx={{
            ...subTextStyles,
            ...afterElem,
          }}
        >
          {rentalCompany}
        </Typography>
        <Typography
          sx={{ ...subTextStyles, ...afterElem, textTransform: 'capitalize' }}
        >
          {type.toLowerCase()}
        </Typography>
        <Typography sx={{ ...subTextStyles }}>{`${String(
          formatMileage(mileage)
        ).toLocaleString('uk-UA')} km`}</Typography>
      </Box>

      <CustomButton
        text="Read more"
        isContained={true}
        onClick={handleReadMoreBtn}
        sx={{ paddingInline: '97px' }}
      />

      <IconButton
        sx={{
          position: 'absolute',

          top: '16px',
          right: '16px',
          zIndex: '99',
        }}
        onClick={handleFavoritesChange}
        disableRipple
      >
        {isFavorite ? (
          <SavedIcon styles={{ width: '16px', height: '16px' }} />
        ) : (
          <UnsavedIcon styles={{ width: '16px', height: '16px' }} />
        )}
      </IconButton>
    </Box>
  );
};
