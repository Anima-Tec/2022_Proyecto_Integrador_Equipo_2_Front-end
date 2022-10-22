import { x } from '@xstyled/styled-components'
import { P } from 'components/font-styles'
import { Link } from 'react-router-dom'
import { Center, Home, List, Settings } from './icons'
import PropTypes from 'prop-types'

const NavBarButton = ({ page, text, active, children }) => {
  const iconPage = {
    home: <Home color={active ? 'white' : undefined} />,
    dashboard: <Center color={active ? 'white' : undefined} />,
    list: <List color={active ? 'white' : undefined} />,
    settings: <Settings color={active ? 'white' : undefined} />,
  }

  return (
    <Link to={`/${page}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <x.div display="flex" alignItems="center" flexDirection="column">
        <x.div p="5px" bg={active && 'blue'} borderRadius={100}>
          {iconPage[page]}
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
