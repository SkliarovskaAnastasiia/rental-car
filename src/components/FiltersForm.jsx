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

  const labelStyles = {
    fontWeight: 400,
    fontSize: '12px',
    lineHeight: '1.33',
    color: '#8d929a',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  };

  return (
    <Formik initialValues={filters} onSubmit={handleSubmit}>
      <Form
        style={{
          display: 'flex',
          gap: '16px',
          justifyContent: 'center',
          alignItems: 'flex-end',
          marginBottom: '56px',
        }}
      >
        <label style={{ ...labelStyles }}>
          Car brand
          <CustomSelect
            data={brands}
            name="brand"
            placeholder="Choose a brand"
            id="brand"
          />
        </label>

        <label style={{ ...labelStyles }}>
          Price/ 1 hour
          <CustomSelect
            data={prices}
            name="rentalPrice"
            placeholder="Choose a price"
            id="rentalPrice"
            isPrice={true}
          />
        </label>

        <label style={{ ...labelStyles }}>
          Сar mileage / km
          <CustomRangeInput
            fromName="minMileage"
            toName="maxMileage"
            id="mileage"
          />
        </label>

        <CustomButton
          text="Search"
          type="submit"
          isContained={true}
          sx={{ paddingInline: '51px', height: '44px' }}
        />
      </Form>
    </Formik>
  );
};
