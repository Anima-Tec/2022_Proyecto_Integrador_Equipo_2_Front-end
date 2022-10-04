import { x } from '@xstyled/styled-components'
import { P } from 'components/font-styles'
import { Pencil } from 'components/icons/Pencil'
import { CloseCircle } from 'components/icons/CloseCircle'
import PropTypes from 'prop-types'

const FoodItem = ({ food, ...rest }) => {
  return (
    <x.div
      w="100%"
      p={'12px'}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      borderBottom={1}
      borderColor="black"
      {...rest}
    >
      <P>
        {food.name}
        <x.span mx={{ _: '10px', lg: '20px' }}> - </x.span>
        {food.amount} {food.unitMeasurement}
      </P>
      <x.div
        ml={{ _: '10px', lg: '87px' }}
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap="6px"
      >
        <Pencil />
        <CloseCircle />
      </x.div>
    </x.div>
  )
}

FoodItem.propTypes = {
  food: PropTypes.any.isRequired,
}

export { FoodItem }
