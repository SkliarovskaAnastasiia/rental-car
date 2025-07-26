export const formatMileage = value => {
  return new Intl.NumberFormat('uk-UA').format(value);
};
