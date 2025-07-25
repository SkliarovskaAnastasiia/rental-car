import { useEffect, useState } from 'react';
import { getBrands } from '../services/getBrands';
import { CustomSelect } from '@UI';
import { CustomRangeInput } from '@UI';
import { CustomButton } from '@UI';
import { Formik, Form } from 'formik';

const prices = ['30', '40', '50', '60', '70', '80'];

export const FiltersForm = ({ onFiltersChange, filters }) => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await getBrands();
        setBrands(response);
      } catch (error) {
        throw new Error(error);
      }
    })();
  }, []);

  const handleSubmit = values => {
    onFiltersChange(values);
  };

  return (
    <Formik initialValues={filters} onSubmit={handleSubmit}>
      <Form
        style={{
          display: 'flex',
          gap: '16px',
          justifyContent: 'center',
          marginBottom: '56px',
        }}
      >
        <CustomSelect data={brands} name="brand" placeholder="Choose a brand" />
        <CustomSelect
          data={prices}
          name="rentalPrice"
          placeholder="Choose a price"
        />
        <CustomRangeInput fromName="minMileage" toName="maxMileage" />

        <CustomButton
          text="Search"
          type="submit"
          isContained={true}
          sx={{ paddingInline: '51px' }}
        />
      </Form>
    </Formik>
  );
};
