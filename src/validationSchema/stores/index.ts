import * as yup from 'yup';

export const storeValidationSchema = yup.object().shape({
  name: yup.string().required(),
  location: yup.string().required(),
  manager_id: yup.string().nullable().required(),
});
