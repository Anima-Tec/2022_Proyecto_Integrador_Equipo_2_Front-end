import { x } from '@xstyled/styled-components';
import { Layout } from 'core/Layout';
import { Form } from 'components/Form';
import { TextField } from 'components/TextField';
import { DonatorLoginInputs } from 'validations/donator-validations';
import { Link } from 'react-router-dom';
import { Button } from 'components/buttons/Button';
import { H1, P } from 'components/font-styles';
import { useLogin } from 'hooks/auth/mutations/useLogin';

const Login = () => {
  const [mutateAsync, error] = useLogin();

  const handdleSubmit = async formData => {
    try {
      await mutateAsync(formData);
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
