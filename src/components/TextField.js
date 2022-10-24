import PropTypes from 'prop-types'
import { x } from '@xstyled/styled-components'
import { useFormContext } from 'react-hook-form'

export function TextField({ isDefault = true, label, name, ...rest }) {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <x.div
      w="100%"
      display="flex"
      flexDirection={isDefault && 'column'}
      gap={!isDefault && '64px'}
    >
      {label && <x.label w={!isDefault && '50%'}>{label}</x.label>}
      <x.div w={!isDefault && '50%'} display="flex" flexDirection="column">
        <x.input
          w="100%"
          outline="none"
          borderBottom={1}
          color={{
            _: errors[name] && 'warning',
            placeholder: errors[name] && 'warning',
          }}
          borderColor={errors[name] ? 'warning' : 'black'}
          pt={isDefault && '24px'}
          pb="6px"
          mb={errors[name] && 2}
          {...register(name)}
          {...rest}
        />
        {errors[name] && (
          <x.small color="warning">{errors[name].message}</x.small>
        )}
      </x.div>
    </x.div>
  )
}

TextField.propTypes = {
  isDefault: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
}
