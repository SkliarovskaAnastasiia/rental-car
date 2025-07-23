import { palette } from '../../theme/palette';
import { ArrowDownIcon } from '@assets';
import { FormControl, MenuItem, Select } from '@mui/material';

export const CustomSelect = ({ brands, value, onChange, placeholder, sx }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <FormControl>
      <Select
        value={value}
        onChange={handleChange}
        IconComponent={ArrowDownIcon}
        displayEmpty
        renderValue={(selected) => {
          if (selected.length === 0) {
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
          fontFamily: 'inherit',
          fontWeight: 500,
          fontSize: '16px',
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
              height: '272px',
              top: '124px !important',

              '& .MuiMenuItem-root': {
                fontFamily: 'inherit',
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
            style: { top: '124px' },
          },
        }}
      >
        {brands?.map((brand) => (
          <MenuItem key={brand} value={brand}>
            {brand}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
