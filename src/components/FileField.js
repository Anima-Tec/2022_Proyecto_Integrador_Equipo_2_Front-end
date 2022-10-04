import PropTypes from 'prop-types'
import { x } from '@xstyled/styled-components'
import { useFormContext } from 'react-hook-form'

export function FileField({ label, name, onChange, ...rest }) {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <>
      <x.input
        type="file"
        id="selectFile"
        display="none"
        {...register(name, {
          onChange,
        })}
        {...rest}
      />
      <x.label
        htmlFor="selectFile"
        cursor="pointer"
        py="7px"
        px="42px"
        borderRadius={100}
        border={1}
        color={errors[name] && 'warning'}
        borderColor={errors[name] ? 'warning' : 'black'}
        textAlign="center"
      >
        {label}
      </x.label>
      {errors[name] && <x.small color="warning">{errors[name].message}</x.small>}
    </>
  )
}

FileField.propTypes = {
  label: PropTypes.string,
  register: PropTypes.any,
  name: PropTypes.string,
  errors: PropTypes.any,
  onChange: PropTypes.func,
}
