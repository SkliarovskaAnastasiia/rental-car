import { palette } from '../../theme/palette';
import homeBg from '../../assets/images/home-bg.jpg';
import { useNavigate } from 'react-router';
import { Box, Typography } from '@mui/material';
import { CustomButton } from '@UI';

const HomePage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/catalog');
  };

  return (
    <Box
      sx={{
        padding: '436px 328px 60px',
        backgroundImage: `url(${homeBg})`,
        backgroundPosition: 'left 0 top -14px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Box>
        <Typography
          component="h1"
          sx={{
            fontFamily: 'inherit',
            fontWeight: 700,
            fontSize: '60px',
            lineHeight: '1.2',
            textAlign: 'center',
            color: palette.white.main,
            marginBottom: '16px',
          }}
        >
          Find your perfect rental car
        </Typography>
        <Typography
          component="h2"
          sx={{
            fontFamily: 'inherit',
            fontWeight: 600,
            fontSize: '24px',
            lineHeight: '1.33',
            textAlign: 'center',
            color: palette.white.main,
            marginBottom: '40px',
          }}
        >
          Reliable and budget-friendly rentals for any journey
        </Typography>
        <CustomButton
          text="View Catalog"
          isContained={true}
          onClick={handleClick}
          sx={{ paddingInline: '99px', display: 'block', marginInline: 'auto' }}
        />
      </Box>
    </Box>
  );
};

export default HomePage;
