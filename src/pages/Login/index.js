import { x } from '@xstyled/styled-components'
import { Layout } from 'core/Layout'
import { Form } from 'components/Form'
import { TextField } from 'components/TextField'
import { DonatorLoginInputs } from 'validations/donator-validations'
import { Link } from 'react-router-dom'
import { Button } from 'components/buttons/Button'
import { H1 } from 'components/font-styles'
import { useLogin } from 'hooks/auth/mutations/useLogin'

const Login = () => {
  const { mutateAsync: loginMutation } = useLogin()

  const handdleSubmit = async formData => {
    try {
      await loginMutation(formData)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Layout>
      <H1 w="100%" mb="65px">
        Iniciar sesión
      </H1>
      <Form schema={DonatorLoginInputs} onSubmit={data => handdleSubmit(data)}>
        <x.div display="flex" flexDirection="column" gap="40px">
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
          <Button text="INICIAR SESIÓN" />
        </x.div>
      </Form>
      <x.div
        mt="52px"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        gap="27px"
      >
        <Link to="/">
          <x.span
            fontFamily="Inter"
            fontWeight="400"
            fontStyle="normal"
            fontSize="16px"
            lineHeight="19px"
            color="black"
          >
            ¿Olvidaste tu contraseña?
          </x.span>
        </Link>
        <Link to="/auth/signup">
          <x.span
            fontFamily="Inter"
            fontWeight="400"
            fontStyle="normal"
            fontSize="16px"
            lineHeight="19px"
            color="black"
          >
            Crear cuenta
          </x.span>
        </Link>
      </x.div>
    </Layout>
  )
}

export default Login
