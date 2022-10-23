import { x } from '@xstyled/styled-components'
import { ArrowDown } from 'components/icons/ArrowDown'
import { Select } from 'components/Select'
import PropTypes from 'prop-types'

const SelectZones = ({
  departmentSelected,
  initialValue = departmentSelected.name
    ? 'Seleccione una zona'
    : 'Debe seleccionar un departamento',
  zoneSelected,
  getZoneSelected,
  label,
  mrArrow,
  ...rest
}) => {
  const handleOnChange = e => {
    const zoneIdSelected = e.target.value
    const dataZoneSelected = departmentSelected.zones.find(
      zone => zone.id === zoneIdSelected,
    )

    getZoneSelected(prevState => ({
      ...prevState,
      zoneSelected: dataZoneSelected,
    }))
  }

  return (
    <x.div w="100%" position="relative">
      <Select
        label={label}
        name="zoneId"
        value={zoneSelected ?? initialValue}
        onChange={handleOnChange}
        w="100%"
        outline="none"
        {...rest}
      >
        <x.option value={initialValue} disabled>
          {initialValue}
        </x.option>
        {departmentSelected?.zones?.map(zone => (
          <x.option key={zone.id} value={zone.id}>
            {zone.name}
          </x.option>
        ))}
      </Select>
      <ArrowDown
        position="absolute"
        top={!label && 0}
        right={0}
        bottom={0}
        m="auto"
        mr={mrArrow}
      />
    </x.div>
  )
}

const departmentSelected = {
  name: PropTypes.string,
  zones: PropTypes.array,
}

SelectZones.propTypes = {
  initialValue: PropTypes.string,
  departments: PropTypes.array.isRequired,
  departmentSelected: PropTypes.shape(departmentSelected).isRequired,
  zoneSelected: PropTypes.string,
  getZoneSelected: PropTypes.func.isRequired,
  label: PropTypes.string,
  mrArrow: PropTypes.string,
}

SelectZones.defaultProps = {
  departments: [],
  departmentSelected: {
    name: '',
    zones: '',
  },
  getZoneSelected: () => {},
}

export { SelectZones }
