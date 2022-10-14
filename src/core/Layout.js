import { x } from '@xstyled/styled-components'
import { Navbar } from 'components/Navbar'
import PropTypes from 'prop-types'

export function Layout({ children, showNavBar, ...rest }) {
  const pb = showNavBar && 84 + 78.8

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
        pb={{ _: `${pb}px`, lg: '84px' }}
        // pb={`${pb}px`}
        display="flex"
        flexDirection="column"
        alignItems="center"
        boxShadow={{ lg: '0px 4px 20px rgba(0, 0, 0, 0.1)' }}
      >
        {showNavBar && <Navbar />}
        {children}
      </x.div>
    </x.div>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
  showNavBar: PropTypes.bool,
}
