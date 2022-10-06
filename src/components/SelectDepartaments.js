import { x } from '@xstyled/styled-components'
import { ArrowDown } from 'components/icons/ArrowDown'
import { Select } from 'components/Select'
import PropTypes from 'prop-types'

const SelectDepartaments = ({
  departaments,
  departamentSelected,
  getDepartamentSelected,
}) => {
  return (
    <x.div w="100%" position="relative">
      <Select
        w="100%"
        value={departamentSelected ?? 'default'}
        name="departaments"
        py="11px"
        px="41px"
        pr="60px"
        borderRadius={20}
        boxShadow="0px 4px 20px rgba(0, 0, 0, 0.1)"
        outline="none"
        onChange={e =>
          getDepartamentSelected({
            departament: e.target.value,
            text: `Centros filtrados por el departamento: ${e.target.value}`,
          })
        }
      >
        <x.option value="default" disabled>
          Departamento
        </x.option>
        {departaments?.map((departament, index) => (
          <x.option key={index} value={departament}>
            {departament}
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

SelectDepartaments.propTypes = {
  departaments: PropTypes.array.isRequired,
  departamentSelected: PropTypes.string,
  getDepartamentSelected: PropTypes.func.isRequired,
}

export { SelectDepartaments }
