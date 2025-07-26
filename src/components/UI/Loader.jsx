import { FadeLoader } from 'react-spinners';
import { palette } from '../../theme/palette';
import { Stack } from '@mui/material';

export const Loader = () => {
  return (
    <Stack sx={{ justifyContent: 'center', alignItems: 'center' }}>
      <FadeLoader color={palette.blue.main} />
    </Stack>
  );
};
