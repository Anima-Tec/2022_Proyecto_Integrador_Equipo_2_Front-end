import * as yup from 'yup'

export const DonatorRegisterInputs = yup.object({
  name: yup
    .string()
    .min(3, 'Debe tener al menos 3 caracteres')
    .matches(/^[aA-zZ ]+$/, 'Solo se permiten letras'),
  lastName: yup
    .string()
    .min(3, 'Debe tener al menos 3 caracteres')
    .matches(/^[aA-zZ ]+$/, 'Solo se permiten letras'),
  email: yup
    .string()
    .email('Email invalido')
    .required('Debe ingresar un email'),
  password: yup.string().min(6, 'Debe tener al menos 6 caracteres'),
})

export const DonatorSettingsInputs = yup.object({
  name: yup
    .string()
    .min(3, 'Debe tener al menos 3 caracteres')
    .matches(/^[aA-zZ ]+$/, 'Solo se permiten letras'),
  lastName: yup
    .string()
    .min(3, 'Debe tener al menos 3 caracteres')
    .matches(/^[aA-zZ ]+$/, 'Solo se permiten letras'),
  email: yup
    .string()
    .email('Email invalido')
    .required('Debe ingresar un email'),
  password: yup
    .string()
    .nullable()
    .transform(value => (value === '' ? null : value))
    .min(6, 'Debe tener al menos 6 caracteres'),
})
