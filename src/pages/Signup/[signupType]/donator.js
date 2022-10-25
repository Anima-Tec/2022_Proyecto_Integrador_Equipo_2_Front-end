import { DonatorRegisterInputs } from 'validations/donator-validations'
import { Form } from 'components/Form'
import { TextField } from 'components/TextField'
import { Layout } from 'core/Layout'
import { Button } from 'components/buttons/Button'
import { H1 } from 'components/font-styles'
import { useSignUp } from 'hooks/auth/mutations/useSignUp'
import { x } from '@xstyled/styled-components'

const Register = () => {
  const { mutateAsync: signUpMutation } = useSignUp()

  const handdleSubmit = async formData => {
    try {
      await signUpMutation(formData)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Layout>
      <H1 w="100%" mb="65px">
        Registro
      </H1>
      <Form
        schema={DonatorRegisterInputs}
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
            label="Contraseña"
            name="password"
            placeholder="Ingresa una contraseña"
            type="password"
          />
          <Button text="REGISTRARSE" />
        </x.div>
      </Form>
    </Layout>
  )
}

export default Register
