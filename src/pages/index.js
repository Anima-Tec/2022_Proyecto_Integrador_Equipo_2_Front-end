import { x } from '@xstyled/styled-components';
import Layout from 'core/layout';
import { useNavigate } from 'react-router-dom';
import Button from 'components/buttons/button';

export default function Index() {
  const navigate = useNavigate();

  return (
    <Layout>
      <x.div
        w="100%"
        h="100%"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        alignItems="center"
      >
        <x.div
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <x.img src="/logo.png" w="303px" h="303px" mb="55px" />
        </x.div>
        <x.div display="flex" w="100%" gap="33px">
          <Button text="Iniciar sesion" onClick={() => navigate('/login')} />
          <Button
            buttonStyle="minimal"
            text="Registrate"
            onClick={() => navigate('/register')}
          />
        </x.div>
      </x.div>
    </Layout>
  );
}
