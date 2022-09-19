import { x } from '@xstyled/styled-components';
import { Logo } from 'components/Logo';
import { Layout } from 'core/Layout';
import { Button } from 'components/buttons/Button';
import { P } from 'components/font-styles';
import { useCurrentUser } from 'hooks/queries/useCurrentUser';

const Onboarding = () => {
  const { isLoading, error, data } = useCurrentUser();

  return (
    !isLoading && (
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
            gap="40px"
          >
            <Logo width="303px" height="303px" />
            <P textAlign="center" w="80%">
              ¡Bienvenido {data?.name} a ALIDAR! Donde podras aportar tu granito
              de arena donando comida a quienes necesitan.
            </P>
          </x.div>
          <Button
            text="CONTINUAR"
            onClick={() => console.log('next step onboarding')}
          />
        </x.div>
      </Layout>
    )
  );
};

export default Onboarding;
