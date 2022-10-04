import { RegisterType } from 'components/buttons/RegisterType';
import { H1 } from 'components/font-styles';
import { x } from '@xstyled/styled-components';
import { Layout } from 'core/Layout';

const Register = () => {
  return (
    <Layout>
      <H1 textAlign="center">Seleccione el tipo de registro</H1>
      <x.div
        w="100%"
        h="100%"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="space-evenly"
      >
        <RegisterType type="DONATOR" />
        <RegisterType type="CENTER" />
      </x.div>
    </Layout>
  );
};

export default Register;
