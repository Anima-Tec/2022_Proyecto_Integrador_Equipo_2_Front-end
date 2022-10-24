import * as yup from 'yup'

export const CreateFoodInputs = yup.object({
  name: yup
    .string()
    .min(3, 'Debe tener al menos 3 caracteres')
    .matches(/^[aA-zZ ]+$/, 'Solo se permiten letras'),
  amount: yup
    .string()
    .required('Debe ingresar una cantidad')
    .matches(/^[0-9-+]+$/, 'Solo se permiten numeros'),
})

export const EditFoodInputs = yup.object({
  amount: yup
    .string()
    .required('Debe ingresar una cantidad')
    .matches(/^[0-9-+]+$/, 'Solo se permiten numeros'),
})
