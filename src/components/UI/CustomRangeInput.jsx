import { palette } from '../../theme/palette';
import { InputAdornment, Stack, TextField } from '@mui/material';

export const CustomRangeInput = ({ from, to, onChange }) => {
  const inputStyles = {
    '& .MuiInputBase-root': {
      backgroundColor: palette.white[100],
      fontFamily: 'inherit',
      fontWeight: 500,
      fontSize: '16px',
      lineHeight: '1.25',
      color: palette.black.main,
      height: '44px',
      padding: '12px 24px',
    },

    '& .MuiInputBase-input': {
      padding: '0',
    },
    '& .MuiOutlinedInput-notchedOutline': {
      border: 'none',
    },
    '& input[type=number]::-webkit-outer-spin-button, & input[type=number]::-webkit-inner-spin-button':
      {
        WebkitAppearance: 'none',
        margin: 0,
      },
    '& input[type=number]': {
      MozAppearance: 'textfield',
    },
  };

  const adormentStyles = {
    '& .MuiTypography-root': {
      fontFamily: 'inherit',
      fontWeight: 500,
      fontSize: '16px',
      lineHeight: '1.25',
      color: palette.black.main,
    },
  };

  const handleChange = (e, name) => {
    const price = e.target.value.trim();
    onChange(name, price);
  };

  return (
    <Stack sx={{ width: '320px', flexDirection: 'row' }}>
      <TextField
        type="number"
        name="from"
        value={from}
        onChange={(e) => handleChange(e, 'from')}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start" sx={adormentStyles}>
              From
            </InputAdornment>
          ),
        }}
        sx={{
          ...inputStyles,
          borderRadius: '12px 0 0 12px',
          borderRight: `1px solid ${palette.white[300]}`,
        }}
      />
      <TextField
        type="number"
        name="to"
        value={to}
        onChange={(e) => handleChange(e, 'to')}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start" sx={adormentStyles}>
              To
            </InputAdornment>
          ),
        }}
        sx={{ ...inputStyles, borderRadius: ' 0 12px 12px 0' }}
      />
    </Stack>
  );
};
