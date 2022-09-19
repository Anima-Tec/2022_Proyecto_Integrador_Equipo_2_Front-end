import { x } from '@xstyled/styled-components';
import { Layout } from 'core/layout';
import { Form } from 'components/Form';
import { TextField } from 'components/TextField';
import { DonatorLoginInputs } from 'validations/donator-validations';
import { Link } from 'react-router-dom';
import { Button } from 'components/buttons/button';
import { H1, P } from 'components/font-styles';
import { useLogin } from 'hooks/mutations/auth';

const Login = () => {
  const { mutate, error } = useLogin();

  const handdleSubmit = formData => {
    try {
      mutate(formData);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Layout>
      <H1 w="100%" mb="65px">
        Iniciar sesión
      </H1>
      <Form schema={DonatorLoginInputs} onSubmit={data => handdleSubmit(data)}>
        <TextField label="Email" name="email" placeholder="Ingresa un email" />
        <TextField
          label="Contraseña"
          name="password"
          placeholder="Ingresa una contraseña"
          type="password"
        />
        {error && <P color="warning">{error}</P>}
        <Button text="INICIAR SESIÓN" />
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
  );
};

export default Login;
