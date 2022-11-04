import * as yup from 'yup'



const MAX_FILE_SIZE = 5000000 //  1MB = 1 million of bytes => 5MB = 5 million of bytes
const FILES_ALLOWED = ['image/png', 'image/jpeg', 'image/jpg']

export const CenterRegisterInputs = yup.object({
  name: yup
    .string()
    .min(3, 'Debe tener al menos 3 caracteres')
    .matches(/^[aA-zZ ]+$/, 'Solo se permiten letras'),
  email: yup
    .string()
    .email('Email invalido')
    .required('Debe ingresar un email'),
  password: yup.string().min(6, 'Debe tener al menos 6 caracteres'),
  street: yup
    .string()
    .min(3, 'Debe tener al menos 3 caracteres')
    .matches(/^[aA-zZ0-9 ]+$/, 'Solo se permiten letras y numeros'),
  numberDoor: yup
    .string()
    .min(1, 'Debe tener al menos 1 caracter')
    .matches(/^[0-9]+$/, 'Solo se permiten numeros'),
  phone: yup
    .string()
    .required('Debe ingresar un telefono')
    .matches(/^[0-9-+]+$/, 'Telefono invalido'),
  description: yup.string().nullable(),
  photo: yup
    .mixed()
    .nullable()
    .test('onlyImages', 'Solo se permiten imagenes', files =>
      validateImage(files[0]),
    )
    .test(
      'maxSize',
      ({ value }) => {
        const fileSize =
          value[0] instanceof File && parseInt(value[0].size / 1000000) // = X / 1MB

        return `El tamaño maximo permitido es de 5 MB y su archivo pesa ${fileSize} MB`
      },
      files => {
        if (!files[0]) return true
        return files[0] instanceof File && files[0].size <= MAX_FILE_SIZE
      },
    ),
})

export const validateImage = file => {
  if (!file) return true
  return file instanceof File && FILES_ALLOWED.includes(file.type)
}

export const CenterSettingsInputs = yup.object({
  name: yup
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
  street: yup
    .string()
    .min(3, 'Debe tener al menos 3 caracteres')
    .matches(/^[aA-zZ0-9 ]+$/, 'Solo se permiten letras y numeros'),
  numberDoor: yup
    .string()
    .min(1, 'Debe tener al menos 1 caracter')
    .matches(/^[0-9]+$/, 'Solo se permiten numeros'),
  phone: yup
    .string()
    .required('Debe ingresar un telefono')
    .matches(/^[0-9-+]+$/, 'Telefono invalido'),
  description: yup.string().nullable(),
  photo: yup
    .mixed()
    .nullable()
    .test('onlyImages', 'Solo se permiten imagenes', files =>
      validateImage(files[0]),
    )
    .test(
      'maxSize',
      ({ value }) => {
        const fileSize =
          value[0] instanceof File && parseInt(value[0].size / 1000000) // = X / 1MB

        return `El tamaño maximo permitido es de 5 MB y su archivo pesa ${fileSize} MB`
      },
      files => {
        if (!files[0]) return true
        return files[0] instanceof File && files[0].size <= MAX_FILE_SIZE
      },
    ),
})
