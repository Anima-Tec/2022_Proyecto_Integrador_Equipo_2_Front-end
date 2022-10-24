import { Select } from './Select'
import PropTypes from 'prop-types'
import { x } from '@xstyled/styled-components'
import { ArrowDown } from './icons/ArrowDown'

export const SelectUnitMeasurement = ({
  unitMeasurements,
  getUnitMeasurementSelected,
  ...rest
}) => {
  const unitMeasurementDiccionary = {
    KG: 'Kilogramos',
    BAG: 'Bolsas',
    G: 'Gramos',
    ML: 'Mililitos',
    L: 'Litros',
  }

  const handleOnChange = e => {
    const unitMeasurementSelected = e.target.value

    getUnitMeasurementSelected(unitMeasurementSelected)
  }

  return (
    <x.div w="50%" position="relative">
      <Select
        w="100%"
        name="unitMeasurement"
        onChange={handleOnChange}
        {...rest}
      >
        {unitMeasurements.map((unitMeasurement, index) => (
          <x.option key={index} value={unitMeasurement}>
            {unitMeasurementDiccionary[unitMeasurement]}
          </x.option>
        ))}
      </Select>
      <ArrowDown position="absolute" top={0} right={0} bottom={0} m="auto" />
    </x.div>
  )
}

SelectUnitMeasurement.propTypes = {
  unitMeasurements: PropTypes.array.isRequired,
  getUnitMeasurementSelected: PropTypes.func.isRequired,
}
