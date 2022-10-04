import PropTypes from 'prop-types'
import { x } from '@xstyled/styled-components'

export function OnboardingLayout({ children, ...rest }) {
  return (
    <x.div
      w={{ _: '100%', lg: '60%' }}
      h="100vh"
      m="auto"
      p={{ _: '30px', lg: '84px' }}
      display="flex"
      flexDirection="column"
      boxShadow={{ lg: '0px 4px 20px rgba(0, 0, 0, 0.1)' }}
      overflowY="auto"
      mb={{ _: '101px', lg: 'inherit' }}
      {...rest}
    >
      {children}
    </x.div>
  )
}

OnboardingLayout.propTypes = {
  children: PropTypes.node,
}
