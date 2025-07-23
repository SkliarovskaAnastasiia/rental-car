import { TextField } from '@mui/material';
import { palette } from '../../theme/palette';

export const CustomInput = ({
  placeholder,
  value,
  onChange,
  type,
  name,
  sx,
}) => {
  const handleChange = (e) => {
    onChange(e.target.value.trim());
  };
  return (
    <TextField
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      type={type}
      name={name}
      sx={{
        width: '100%',

        '& .MuiInputBase-root': {
          backgroundColor: palette.white[100],
          borderRadius: '12px',
          fontFamily: 'inherit',
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
