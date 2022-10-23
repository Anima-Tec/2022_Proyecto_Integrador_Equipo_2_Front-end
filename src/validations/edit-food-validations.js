import * as yup from 'yup'

export const EditFoodInputs = yup.object({
  amount: yup
    .string()
    .required('Debe ingresar una cantidad')
    .matches(/^[0-9-+]+$/, 'Solo se permiten numeros'),
})
