import { x } from '@xstyled/styled-components'
import { P } from 'components/font-styles'
import { Logo } from 'components/Logo'
import { Center, Home, List, Settings } from './icons'

export function Navbar() {
  return (
    <x.div
      w={{ _: '100%', lg: 'auto' }}
      p={{_:'10px', lg: '13px' }}
      boxShadow="0px 4px 20px rgba(0, 0, 0, 0.1)"
      position={{ _: 'fixed', lg: 'inherit' }}
      bottom={{ _: '0px', lg: '0' }}
      display="flex"
      justifyContent={{ _: 'center', lg: 'inherit' }}
      alignItems={{ _: 'center', lg: 'inherit' }}
      bg='white'
    >
      <Logo
        width="65.31px"
        height="65.31px"
        visibility={{ _: 'hidden', lg: 'visible' }}
      />
      <x.div
        w={{ _: '90%', lg: 'auto' }}
        h={{ _: 'auto', lg: '50%' }}
        position="absolute"
        display="flex"
        flexDirection={{ _: 'row', lg: 'column' }}
        justifyContent={{ _: 'space-around', lg: 'space-between' }}
        top={{ lg: '10rem' }}
      >
        <x.div alignItems="center" display="flex" flexDirection="column">
          <Home />
          <P fontSize={{ _: '12px', lg: '14px' }}>Inicio</P>
        </x.div>

        <x.div alignItems="center" display="flex" flexDirection="column">
          <Center />
          <P fontSize={{ _: '12px', lg: '14px' }}>Centros</P>
        </x.div>

        <x.div
          textAlign="center"
          alignItems="center"
          display="flex"
          flexDirection="column"
        >
          <List />
          <P fontSize={{ _: '12px', lg: '14px' }}>
            Lista <br /> Alimentos
          </P>
        </x.div>

        <x.div alignItems="center" display="flex" flexDirection="column">
          <Settings />
          <P fontSize={{ _: '12px', lg: '14px' }}>Ajustes</P>
        </x.div>
      </x.div>
    </x.div>
  )
}
