import { DonatorRegisterInputs } from 'validations/donator-validations';
import { Form } from 'components/Form';
import { TextField } from 'components/TextField';
import { Layout } from 'core/Layout';
import { Button } from 'components/buttons/Button';
import { H1, P } from 'components/font-styles';
import { useSignUp } from 'hooks/mutations/auth';

const Register = () => {
  const { mutate, error } = useSignUp();

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
        Registro
      </H1>
      <Form
        schema={DonatorRegisterInputs}
        onSubmit={data => handdleSubmit({ rol: 'DONATOR', ...data })}
      >
        <TextField label="Nombre" name="name" placeholder="Ingresa un nombre" />
        <TextField
          label="Apellido"
          name="lastName"
          placeholder="Ingresa un apellido"
        />
        <TextField label="Email" name="email" placeholder="Ingresa un email" />
        <TextField
          label="Contraseña"
          name="password"
          placeholder="Ingresa una contraseña"
          type="password"
        />
        <TextField
          label="Telefono"
          name="phone"
          placeholder="Ingresa un telefono"
        />
        {error && <P color="warning">{error}</P>}
        <Button text="REGISTRARSE" />
      </Form>
    </Layout>
  );
};

export default Register;
