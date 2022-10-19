import { x } from '@xstyled/styled-components'
import { H3, P } from 'components/font-styles'
import { Button } from './buttons/Button'

export function ModalEditFood() {
  return (
    <x.div display="flex" justifyContent="center" alignContent="center">
      <x.div
        p={{ _: '20px', lg: '40px' }}
        position="absolute"
        top="40%"
        bg="white"
        borderRadius="20px"
        boxShadow="1px 1px 1px 700px rgba(0, 0, 0, 0.75)"
      >
        <x.div>
          <H3 fontSize={{ _: '12px', lg: '16px' }}>Fideos</H3>
          <x.div display="flex" gap='20px' m={{_:'5px', lg:'30px'}}>
            <P fontSize={{ _: '12px', lg: '14px' }}>Cantidad</P>
            <input
        
            />
          </x.div>
          <x.div display="flex" gap='20px'  m={{_:'10px', lg:'30px'}}>
            <P fontSize={{ _: '12px', lg: '14px' }}>Unidad de medida</P>
            <input/>
          </x.div>
        </x.div>
        <Button text="CANCELAR" />
        <Button text="GUARDAR" />
      </x.div>
    </x.div>
  )
}
