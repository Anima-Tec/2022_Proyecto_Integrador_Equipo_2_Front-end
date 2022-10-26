import { x } from '@xstyled/styled-components'
import { P } from 'components/font-styles'
import { useLocation } from 'react-router-dom'
import { NavBarButton } from './NavBarButton'
import { useCurrentUser } from 'hooks/users/queries/getCurrentUser'
import { Hand } from './icons/Hand'

export function Navbar() {
  const location = useLocation()
  const { data: user } = useCurrentUser()

  const currentPage = page => location.pathname.includes(page)

  return (
    <x.div
      w={{ _: '100%', lg: 'unset' }}
      position="fixed"
      top={{ _: 'unset', lg: 0 }}
      left={{ _: 0, lg: 'unset' }}
      right={0}
      bottom={0}
      h={{ _: 'fit-content', lg: '100vh' }}
      p={{ _: '10px', lg: '15px' }}
      bg="white"
      boxShadow="0px 4px 20px rgba(0, 0, 0, 0.1)"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Hand
        position="absolute"
        top={0}
        m="auto"
        mt={{ _: '10px', lg: '13px' }}
        w="65.31px"
        h="65.31px"
        visibility={{ _: 'hidden', lg: 'visible' }}
      />
      <x.div
        w="100%"
        textAlign="center"
        display={{ _: 'flex', lg: 'grid' }}
        alignItems="center"
        justifyContent={{ _: 'space-evenly', lg: 'unset' }}
        gap={{ lg: '34px' }}
      >
        {/* <NavBarButton page="home" text="Inicio" active={currentPage('/home')} /> */}
        <NavBarButton
          page="dashboard"
          text="Centros"
          active={currentPage('/dashboard')}
        />
        {user?.rol === 'CENTER' && (
          <NavBarButton
            page="needs"
            text="Necesidades"
            active={currentPage('/needs')}
          />
        )}
        <NavBarButton
          page="settings"
          text="Ajustes"
          active={currentPage('/settings')}
        />
      </x.div>
    </x.div>
  )
}
