import { Box, Typography } from '@mui/material';
import { Form, Formik } from 'formik';
import { palette } from '../theme/palette';
import { CustomInput, CustomButton } from '@UI';
import { CustomDatePicker } from '@components';
import * as Yup from 'yup';
import toast from 'react-hot-toast';

const validationSchema = Yup.object().shape({
  username: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  date: Yup.string().required('Date is required'),
  comment: Yup.string(),
});

export const BookForm = () => {
  const handleSubmit = (_, action) => {
    toast.success('Your car has been successfully booked!');
    action.resetForm();
  };

  return (
    <Box
      sx={{
        padding: '32px',
        width: '640px',
        height: '488px',
        border: `1px solid ${palette.white[300]}`,
        borderRadius: '10px',
      }}
    >
      <Typography
        sx={{
          fontWeight: 600,
          fontSize: '20px',
          lineHeight: '1.2',
          color: palette.black.main,
          marginBottom: '8px',
        }}
      >
        Book your car now
      </Typography>
      <Typography
        sx={{
          fontWeight: 500,
          fontSize: '16px',
          lineHeight: '1.25',
          color: '#8d929a',
          marginBottom: '24px',
        }}
      >
        Stay connected! We are always ready to help you.
      </Typography>

      <Formik
        initialValues={{ username: '', email: '', comment: '', date: null }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <CustomInput
            placeholder="Name*"
            name="username"
            type="text"
            sx={{ marginBottom: '16px' }}
          />

          <CustomInput
            placeholder="Email*"
            name="email"
            type="email"
            sx={{ marginBottom: '16px' }}
          />

          <CustomDatePicker
            name="date"
            placeholder="Booking date"
            sx={{ marginBottom: '16px' }}
          />

          <CustomInput
            placeholder="Comment"
            name="comment"
            type="text"
            multiline
            rows={3}
            sx={{
              '& .MuiInputBase-root': {
                padding: '0',
                backgroundColor: palette.white[100],
                borderRadius: '12px',
              },
              marginBottom: '24px',
            }}
          />

          <CustomButton
            text="Send"
            isContained={true}
            type="submit"
            sx={{
              paddingInline: '58px',
              display: 'block',
              marginInline: 'auto',
            }}
          />
        </Form>
      </Formik>
    </Box>
  );
};
