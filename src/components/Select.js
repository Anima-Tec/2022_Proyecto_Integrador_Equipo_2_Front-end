import PropTypes from 'prop-types'
import { x } from '@xstyled/styled-components'
import { useFormContext } from 'react-hook-form'

export function Select({ label, name, children, ...rest }) {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <>
      {label && <x.label>{label}</x.label>}
      <x.select
        outline="none"
        appearance="none"
        color={{ placeholder: errors[name] && 'warning' }}
        borderColor={errors[name] ? 'warning' : 'black'}
        mb={errors[name] && 2}
        {...register(name)}
        {...rest}
      >
        {children}
      </x.select>
      {errors[name] && (
        <x.small color="warning">{errors[name].message}</x.small>
      )}
    </>
  )
}

Select.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
}
