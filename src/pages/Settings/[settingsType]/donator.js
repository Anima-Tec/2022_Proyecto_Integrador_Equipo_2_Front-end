import { DonatorSettingsInputs } from 'validations/donator-validations'
import { Form } from 'components/Form'
import { TextField } from 'components/TextField'
import { Layout } from 'core/Layout'
import { Button } from 'components/buttons/Button'
import { H1, P } from 'components/font-styles'
import { x } from '@xstyled/styled-components'
import { useCurrentUser } from 'hooks/users/queries/getCurrentUser'
import { useUpdateUser } from 'hooks/users/mutations/updateUser'
import toast from 'react-hot-toast'
import { useState } from 'react'

const Register = () => {
  const { isLoading, data, refetch: refetchCurrentUser } = useCurrentUser()
  const { mutateAsync: updateUserMutation, error } = useUpdateUser()

  const [password, setPassword] = useState('')

  const initialValues = {
    name: data?.name,
    lastName: data?.lastName,
    email: data?.email,
  }

  const handdleSubmit = async formData => {
    try {
      if (
        formData.name !== initialValues.name ||
        formData.lastName !== initialValues.lastName ||
        formData.email !== initialValues.email ||
        formData.password !== null
      ) {
        await updateUserMutation(formData)
        refetchCurrentUser()
        setPassword('')
        return toast.success('Datos actualizados')
      }
      toast.error('Debe por lo menos cambiar un campo')
    } catch (error) {}
  }

  return (
    !isLoading && (
      <Layout>
        <H1 w="100%" mb="65px">
          Ajustes
        </H1>
        <Form
          schema={DonatorSettingsInputs}
          defaultValues={initialValues}
          onSubmit={data => handdleSubmit({ rol: 'DONATOR', ...data })}
        >
          <x.div display="flex" flexDirection="column" gap="40px">
            <TextField
              label="Nombre"
              name="name"
              placeholder="Ingresa un nombre"
            />
            <TextField
              label="Apellido"
              name="lastName"
              placeholder="Ingresa un apellido"
            />
            <TextField
              label="Email"
              name="email"
              placeholder="Ingresa un email"
            />
            <TextField
              value={password}
              label="Contraseña"
              name="password"
              placeholder="Ingresa una contraseña"
              type="password"
              onChange={e => setPassword(e.target.value)}
            />
            {error && <P color="warning">{error}</P>}
            <Button text="GUARDAR" />
          </x.div>
        </Form>
      </Layout>
    )
  )
}

export default Register
