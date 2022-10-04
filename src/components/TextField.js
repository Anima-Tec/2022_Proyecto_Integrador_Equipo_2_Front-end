import PropTypes from 'prop-types'
import { x } from '@xstyled/styled-components'
import { useFormContext } from 'react-hook-form'

export function TextField({ label, name, ...rest }) {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <x.div display="flex" flexDirection="column">
      <x.label>{label}</x.label>
      <x.input
        outline="none"
        borderBottom={1}
        color={{ placeholder: errors[name] && 'warning' }}
        borderColor={errors[name] ? 'warning' : 'black'}
        pt="24px"
        pb="6px"
        mb={errors[name] && 2}
        {...register(name)}
        {...rest}
      />
      {errors[name] && <x.small color="warning">{errors[name].message}</x.small>}
    </x.div>
  )
}

TextField.propTypes = {
  label: PropTypes.string,
  register: PropTypes.any,
  name: PropTypes.string,
  errors: PropTypes.any,
}
