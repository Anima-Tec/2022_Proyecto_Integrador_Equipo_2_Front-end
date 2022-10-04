import { x } from '@xstyled/styled-components'
import { Layout } from 'core/Layout'
import { useNavigate } from 'react-router-dom'
import { Button } from 'components/buttons/Button'
import { P } from 'components/font-styles'
import { Logo } from 'components/Logo'

const Index = () => {
  const navigate = useNavigate()

  return (
    <Layout>
      <x.div w="100%" h="100%" display="flex" flexDirection="column" justifyContent="space-between" alignItems="center">
        <x.div display="flex" flexDirection="column" justifyContent="center" alignItems="center" gap="40px">
          <Logo width="303px" height="303px" />
          <P textAlign="center" w="80%">
            Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
          </P>
        </x.div>
        <x.div display="flex" flexDirection={{ _: 'column', lg: 'row' }} w="100%" gap="33px">
          <Button text="Iniciar sesion" onClick={() => navigate('/auth/login')} />
          <Button buttonStyle="minimal" text="Registrate" onClick={() => navigate('/auth/signup')} />
        </x.div>
      </x.div>
    </Layout>
  )
}

export default Index
