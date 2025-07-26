import { TextField } from '@mui/material';
import { palette } from '../../theme/palette';
import { useField } from 'formik';

export const CustomInput = ({
  placeholder,
  type,
  name,
  sx,
  InputProps,
  ...props
}) => {
  const [field, meta] = useField(name);

  return (
    <TextField
      {...field}
      placeholder={placeholder}
      type={type}
      name={name}
      error={Boolean(meta.touched && meta.error)}
      helperText={meta.touched && meta.error}
      autoComplete="off"
      InputProps={InputProps}
      {...props}
      sx={{
        width: '100%',

        '& .MuiInputBase-root': {
          backgroundColor: palette.white[100],
          borderRadius: '12px',
        },
        '& .MuiInputBase-input': {
          padding: '12px 20px',
          fontSize: '16px',
          fontWeight: 500,
          lineHeight: '1.25',
          color: palette.black.main,
          '&:placeholder': {
            color: '#8d929a',
          },
        },
        '& .MuiOutlinedInput-notchedOutline': {
          border: 'none',
        },
        ...sx,
      }}
    />
  );
};
