import PropTypes from 'prop-types'
import { x } from '@xstyled/styled-components'
import { useFormContext } from 'react-hook-form'

export function Select({ label, name, onChange, children, ...rest }) {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <>
      {label && <x.label>{label}</x.label>}
      <x.select
        appearance="none"
        color={{ placeholder: errors[name] && 'warning' }}
        borderColor={errors[name] ? 'warning' : 'black'}
        mb={errors[name] && 2}
        {...register(name, {
          onChange,
        })}
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
  onChange: PropTypes.func,
  label: PropTypes.string,
}
