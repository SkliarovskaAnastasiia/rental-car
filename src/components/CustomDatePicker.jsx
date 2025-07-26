import { useField } from 'formik';
import { CustomInput } from '@UI';
import { useState } from 'react';
import dayjs from 'dayjs';
import { ClickAwayListener, Popper } from '@mui/material';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { palette } from '../theme/palette';

export const CustomDatePicker = ({ name, placeholder, sx }) => {
  const [field, , helpers] = useField(name);
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleDateChange = date => {
    helpers.setValue(dayjs(date).format('YYYY-MM-DD'));
    setAnchorEl(null);
  };

  return (
    <>
      <CustomInput
        name={name}
        onClick={e => setAnchorEl(e.currentTarget)}
        placeholder={placeholder}
        {...field}
        value={field.value || ''}
        readOnly
        InputProps={{
          readOnly: true,
        }}
        sx={{ ...sx }}
      />

      <Popper open={open} anchorEl={anchorEl} placement="bottom-end">
        <ClickAwayListener onClickAway={() => setAnchorEl(null)}>
          <DateCalendar
            value={field.value ? dayjs(field.value) : null}
            onChange={handleDateChange}
            sx={{
              backgroundColor: palette.white.main,
              border: `1px solid ${palette.blue.main}`,
              borderRadius: '12px',
              boxShadow: 'none',

              '& .MuiPickersCalendarHeader-root': {
                margin: '0 ',
                padding: '12px',
                position: 'relative',
                justifyContent: 'center',

                '& .MuiPickersCalendarHeader-labelContainer': {
                  margin: '0 ',

                  '& .MuiPickersFadeTransitionGroup-root': {
                    fontFamily: '"Inter", sans-serif',
                    fontWeight: 600,
                    fontSize: '16px',
                    lineHeight: '1.2',
                    color: palette.black.main,
                    width: '100%',

                    '& .MuiPickersCalendarHeader-label': {
                      margin: '0',
                    },
                  },

                  '& .MuiButtonBase-root': {
                    display: 'none',
                  },
                },

                '& .MuiPickersArrowSwitcher-root': {
                  height: '0',
                  width: '0',

                  '& .MuiButtonBase-root': {
                    position: 'absolute',
                    padding: '0',
                    color: palette.blue.main,
                    top: '12px',

                    '& .MuiSvgIcon-root': {
                      width: '24px',
                      height: '24px',
                    },

                    '&.MuiPickersArrowSwitcher-previousIconButton': {
                      left: '12px',
                    },
                    '&.MuiPickersArrowSwitcher-nextIconButton': {
                      right: '12px',
                    },
                  },
                },
              },

              '& .MuiDayCalendar-header': {
                borderBottom: `1px solid ${palette.blue.main}`,

                '& .MuiTypography-root': {
                  fontFamily: '"Inter", sans-serif',
                  fontWeight: 600,
                  fontSize: '12px',
                  lineHeight: '1.2',
                  color: '#8d929a',
                },
              },

              '& .MuiButtonBase-root': {
                fontFamily: '"Inter", sans-serif',
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '1.2',
                color: palette.black.main,

                '&:not(.Mui-selected)': {
                  border: 'none',
                },
                '&.Mui-selected': {
                  backgroundColor: palette.blue.main,
                  color: palette.white.main,
                },
              },
            }}
          />
        </ClickAwayListener>
      </Popper>
    </>
  );
};
