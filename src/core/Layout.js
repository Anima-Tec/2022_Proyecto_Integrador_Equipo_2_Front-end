import PropTypes from 'prop-types'
import { x } from '@xstyled/styled-components'

export function Layout({ children, ...rest }) {
  return (
    <x.div
      w="100%"
      minHeight="100vh"
      display="flex"
      justifyContent="center"
      bg="white"
      {...rest}
    >
      <x.div
        w={{ _: '100%', lg: '60%' }}
        minHeight="100vh"
        p={{ _: '30px', lg: '84px' }}
        display="flex"
        flexDirection="column"
        alignItems="center"
        boxShadow={{ lg: '0px 4px 20px rgba(0, 0, 0, 0.1)' }}
      >
        {children}
      </x.div>
    </x.div>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
}
