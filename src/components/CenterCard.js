import { x } from '@xstyled/styled-components'
import { P } from 'components/font-styles'
import PropTypes from 'prop-types'
import { CenterIlustration } from './icons/CenterIlustration'

export function CenterCard({
  img,
  name,
  foods,
  numberVolunteersRequired,
  isOnboarding,
  ...rest
}) {
  return (
    <x.div
      w="100%"
      p={{ _: '17px', lg: '23px' }}
      display="flex"
      boxShadow="0px 4px 20px rgba(0, 0, 0, 0.1)"
      borderRadius="20px"
      gap="26px"
      cursor="pointer"
      {...rest}
    >
      {img ? (
        <x.img
          src={img}
          alt={name}
          w={{ _: '112px', lg: '203px' }}
          h={{ _: '90px', lg: '153px' }}
          borderRadius="20px"
          objectFit="cover"
        />
      ) : (
        <x.div w={{ _: '112px', lg: '203px' }} h={{ _: '90px', lg: '153px' }}>
          <CenterIlustration
            w={{ _: '112px', lg: '203px' }}
            h={{ _: '90px', lg: '153px' }}
          />
        </x.div>
      )}
      <x.div
        w="100%"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        fontSize={{ _: '12px', lg: '16px' }}
      >
        <P fontSize={{ _: '12px', lg: '16px' }} fontWeight="bold">
          {name}
        </P>
        {(foods?.length || isOnboarding) && (
          <P fontSize={{ _: '12px', lg: '16px' }}>Se requieren alimentos</P>
        )}
        {(numberVolunteersRequired || isOnboarding) && (
          <P fontSize={{ _: '12px', lg: '16px' }}>Se requieren voluntarios</P>
        )}
        <P fontSize={{ _: '12px', lg: '16px' }} textAlign="end">
          Toca para más detalles
        </P>
      </x.div>
    </x.div>
  )
}

CenterCard.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string.isRequired,
  foods: PropTypes.any,
  numberVolunteersRequired: PropTypes.number,
  isOnboarding: PropTypes.bool,
}
