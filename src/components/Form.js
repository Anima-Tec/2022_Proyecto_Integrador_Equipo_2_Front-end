import PropTypes from 'prop-types'
import { useForm, FormProvider } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { x } from '@xstyled/styled-components'

export function Form({ children, schema, defaultValues, onSubmit, onCancel }) {
  const { handleSubmit, ...methods } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  })

  return (
    <FormProvider {...methods}>
      <x.form w="100%" onSubmit={handleSubmit(onSubmit)}>
        {children}
      </x.form>
    </FormProvider>
  )
}

Form.propTypes = {
  children: PropTypes.node.isRequired,
  schema: PropTypes.any,
  defaultValues: PropTypes.object,
  onSubmit: PropTypes.func,
  onCancel: PropTypes.func,
}
