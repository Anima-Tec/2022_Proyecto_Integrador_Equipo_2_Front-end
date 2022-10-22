import { x } from '@xstyled/styled-components'
import { ArrowDown } from 'components/icons/ArrowDown'
import { Select } from 'components/Select'
import PropTypes from 'prop-types'

const SelectDepartments = ({
  initialValue,
  departments,
  departmentSelected,
  getDepartmentSelected,
  label,
  mrArrow,
  ...rest
}) => {
  const handleOnChange = e => {
    const departmentSelected = e.target.value

    const filteredZonesByDepartment = departments.find(
      department => department.name === departmentSelected,
    )?.zones

    getDepartmentSelected({
      name: departmentSelected,
      zoneSelected: {
        id: null,
        departmentId: null,
        name: null,
      },
      zones: filteredZonesByDepartment,
    })
  }

  return (
    <x.div w="100%" position="relative">
      <Select
        w="100%"
        label={label}
        name="department"
        value={departmentSelected ?? initialValue}
        onChange={handleOnChange}
        outline="none"
        {...rest}
      >
        <x.option value={initialValue} disabled>
          {initialValue}
        </x.option>
        {departments?.map(department => (
          <x.option key={department.id} value={department.name}>
            {department.name}
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

SelectDepartments.propTypes = {
  initialValue: PropTypes.string.isRequired,
  departments: PropTypes.array.isRequired,
  departmentSelected: PropTypes.string,
  getDepartmentSelected: PropTypes.func.isRequired,
  label: PropTypes.string,
  mrArrow: PropTypes.string,
}

SelectDepartments.defaultProps = {
  initialValue: 'Seleccione un departamento',
}

export { SelectDepartments }
