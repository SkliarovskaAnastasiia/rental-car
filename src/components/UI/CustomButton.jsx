import { Button } from '@mui/material';
import { palette } from '../../theme/palette';

export const CustomButton = ({
  text,
  type = 'button',
  isContained,
  sx,
  onClick,
}) => {
  return (
    <Button
      type={type}
      onClick={onClick}
      disableRipple
      sx={{
        '&.MuiButtonBase-root': {
          border: isContained ? 'none' : `1px solid ${palette.blue.main}`,
          borderRadius: '12px',
          backgroundColor: isContained ? palette.blue.main : 'transparent',
          paddingBlock: '12px',
          color: isContained ? palette.white.main : palette.black.main,
          fontFamily: 'inherit',
          fontWeight: 600,
          fontSize: '16px',
          lineHeight: '1.25',
          textTransform: 'capitalize',
          ...sx,

          '&:hover': {
            backgroundColor: isContained ? palette.blue.dark : 'transparent',
            borderColor: isContained ? 'none' : palette.blue.dark,
          },
        },
      }}
    >
      {text}
    </Button>
  );
};
