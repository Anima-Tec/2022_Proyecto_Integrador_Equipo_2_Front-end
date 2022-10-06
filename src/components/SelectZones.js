import { x } from '@xstyled/styled-components'
import { ArrowDown } from 'components/icons/ArrowDown'
import { Select } from 'components/Select'
import PropTypes from 'prop-types'

const SelectZones = ({ zones, zoneSelected, getZoneSelected }) => {
  return (
    <x.div w="100%" position="relative">
      <Select
        w="100%"
        value={zoneSelected ?? 'default'}
        name="zones"
        py="11px"
        px="41px"
        pr="60px"
        borderRadius={20}
        boxShadow="0px 4px 20px rgba(0, 0, 0, 0.1)"
        outline="none"
        onChange={e =>
          getZoneSelected({
            zone: e.target.value,
            text: `Centros filtrados por la zona: ${e.target.value}`,
          })
        }
      >
        <x.option value="default" disabled>
          Zona
        </x.option>
        {zones?.map((zone, index) => (
          <x.option key={index} value={zone}>
            {zone}
          </x.option>
        ))}
      </Select>
      <ArrowDown
        position="absolute"
        top={0}
        right={0}
        bottom={0}
        m="auto"
        mr="19px"
      />
    </x.div>
  )
}

SelectZones.propTypes = {
  zones: PropTypes.array.isRequired,
  zoneSelected: PropTypes.string,
  getZoneSelected: PropTypes.func.isRequired,
}

export { SelectZones }
