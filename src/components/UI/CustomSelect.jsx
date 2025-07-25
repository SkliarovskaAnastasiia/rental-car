import { palette } from '../../theme/palette';
import { ArrowDownIcon } from '@assets';
import { FormControl, MenuItem, Select } from '@mui/material';
import { useField } from 'formik';

export const CustomSelect = ({ name, data, placeholder, sx }) => {
  const [field, meta, helpers] = useField(name);

  const handleChange = e => {
    helpers.setValue(e.target.value);
  };

  return (
    <FormControl>
      <Select
        {...field}
        onChange={handleChange}
        name={name}
        IconComponent={ArrowDownIcon}
        displayEmpty
        renderValue={selected => {
          if (selected?.length === 0) {
            return (
              <em
                style={{
                  fontStyle: 'normal',
                  marginRight: '32px',
                }}
              >
                {placeholder}
              </em>
            );
          }

          return selected;
        }}
        sx={{
          fontSize: '16px',
          fontWeight: 500,
          lineHeight: '1.25',
          color: palette.black.main,
          borderRadius: '12px',
          backgroundColor: palette.white[100],

          '& .MuiSelect-select': { padding: '12px 16px' },
          '& .MuiOutlinedInput-notchedOutline': {
            border: 'none',
          },

          '& .MuiSelect-icon': {
            right: '16px',
          },
          ...sx,
        }}
        MenuProps={{
          PaperProps: {
            sx: {
              boxShadow: '0 4px 36px 0 rgba(0, 0, 0, 0.02);',
              backgroundColor: palette.white.main,
              border: `1px solid ${palette.white[100]}`,
              borderRadius: '12px',
              width: '204px',
              top: '208px !important',

              '& .MuiMenuItem-root': {
                fontSize: '16px',
                fontWeight: 500,
                lineHeight: '1.25',
                color: '#8d929a',

                '&:hover': {
                  backgroundColor: 'transparent',
                },
                '&:focus': {
                  backgroundColor: 'transparent',
                },

                '&.Mui-selected': {
                  backgroundColor: 'transparent',
                  color: palette.black.main,
                },
              },
            },
          },
        }}
      >
        {data?.map(item => (
          <MenuItem key={item} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>

      {meta.touched && meta.error && (
        <FormHelperText>{meta.error}</FormHelperText>
      )}
    </FormControl>
  );
};
