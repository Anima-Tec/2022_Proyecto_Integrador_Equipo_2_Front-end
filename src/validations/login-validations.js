import * as yup from 'yup'

export const LoginInputs = yup.object({
  email: yup
    .string()
    .email('Email invalido')
    .required('Debe ingresar un email'),
  password: yup.string().min(6, 'Debe tener al menos 6 caracteres'),
})