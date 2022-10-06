import PropTypes from 'prop-types'
import { x } from '@xstyled/styled-components'
import { useFormContext } from 'react-hook-form'

export function Select({ name, onChange, children, ...rest }) {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <x.select
      position="relative"
      appearance="none"
      {...register(name, {
        onChange,
      })}
      {...rest}
    >
      {children}
    </x.select>
  )
}

Select.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
}
