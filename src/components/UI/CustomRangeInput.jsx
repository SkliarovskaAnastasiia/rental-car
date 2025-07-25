import { useField, useFormikContext } from 'formik';
import { palette } from '../../theme/palette';
import { InputAdornment, Stack, TextField } from '@mui/material';

export const CustomRangeInput = ({ fromName, toName }) => {
  const [fromField] = useField(fromName);
  const [toField] = useField(toName);
  const { setFieldValue } = useFormikContext();

  const inputStyles = {
    '& .MuiInputBase-root': {
      backgroundColor: palette.white[100],
      fontSize: '16px',
      fontWeight: 500,
      lineHeight: '1.25',
      color: palette.black.main,
      height: '44px',
      padding: '12px 24px',
      borderRadius: 'inherit',
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
      fontSize: '16px',
      fontWeight: 500,
      lineHeight: '1.25',
      color: palette.black.main,
    },
  };

  return (
    <Stack sx={{ width: '320px', flexDirection: 'row' }}>
      <TextField
        {...fromField}
        type="number"
        value={fromField.value || ''}
        onChange={e => setFieldValue(fromName, e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start" sx={adormentStyles}>
              From
            </InputAdornment>
          ),
        }}
        sx={{
          ...inputStyles,
          maxHeight: '44px',
          borderRadius: '12px 0 0 12px',
          borderRight: `1px solid ${palette.white[300]}`,
        }}
      />
      <TextField
        {...toField}
        type="number"
        value={toField.value || ''}
        onChange={e => setFieldValue(toName, e.target.value)}
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
