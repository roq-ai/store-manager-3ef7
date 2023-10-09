import * as yup from 'yup';

export const salesValidationSchema = yup.object().shape({
  quantity: yup.number().integer().required(),
  total_price: yup.number().integer().required(),
  product_id: yup.string().nullable().required(),
});
