import { x } from '@xstyled/styled-components'
import { P } from 'components/font-styles'
import { Link } from 'react-router-dom'
import { Center, Home, List, Settings } from './icons'
import PropTypes from 'prop-types'

const NavBarButton = ({ page, text, active, children }) => {
  return (
    <Link to={`/${page}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <x.div
        display="flex"
        alignItems="center"
        flexDirection="column"
        gap={{ _: '5px', lg: '15px' }}
      >
        <x.div p="5px" bg={active && 'blue'} borderRadius={100}>
          {page === 'home' && <Home color={active ? 'white' : undefined} />}
          {page === 'dashboard' && (
            <Center color={active ? 'white' : undefined} />
          )}
          {page === 'foods' && <List color={active ? 'white' : undefined} />}
          {page === 'settings' && (
            <Settings color={active ? 'white' : undefined} />
          )}
        </x.div>
        {children ?? <P fontSize={{ _: '12px', lg: '14px' }}>{text}</P>}
      </x.div>
    </Link>
  )
}

NavBarButton.propTypes = {
  page: PropTypes.string.isRequired,
  text: PropTypes.string,
  active: PropTypes.bool.isRequired,
  children: PropTypes.node,
}

export { NavBarButton }
