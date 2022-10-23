import { x } from '@xstyled/styled-components'
import { P } from 'components/font-styles'
import PropTypes from 'prop-types'

const NeedList = ({ foods, numberVolunteersRequired }) => {
  console.log(foods)
  return (
    <x.div w="100%" display="grid" gap="25px">
      {numberVolunteersRequired !== 0 && (
        <P fontWeight="bold">
          Se requieren {numberVolunteersRequired} voluntarios
        </P>
      )}
      {foods.length > 0 && (
        <x.div>
          <P fontWeight="bold" mb="15px">
            Se requieren los siguientes alimentos:
          </P>
          <x.ul
            listStyleType="disc"
            listStylePosition="inside"
            h={foods.length >= 6 && '10rem'}
            overflowY="auto"
          >
            {foods.map((food, index) => (
              <x.li
                key={food.id ?? index}
                mb={index !== foods.length - 1 && '15px'}
              >
                {food.amount} {food.unitMeasurement} de {food.name}
              </x.li>
            ))}
          </x.ul>
        </x.div>
      )}
    </x.div>
  )
}

NeedList.propTypes = {
  foods: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      unitMeasurement: PropTypes.oneOf(['KG', 'BAG', 'G', 'ML', 'L']),
    }),
  ),
  numberVolunteersRequired: PropTypes.number,
}

export { NeedList }
