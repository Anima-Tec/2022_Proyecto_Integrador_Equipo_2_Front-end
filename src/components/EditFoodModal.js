import { x } from '@xstyled/styled-components'
import { H3, P } from 'components/font-styles'
import { Button } from './buttons/Button'
import { Form } from './Form'
import { TextField } from './TextField'
import { SelectUnitMeasurement } from './SelectUnitMeasurement'
import { useState } from 'react'
import { EditFoodInputs } from 'validations/edit-food-validations'
import { Modal } from './Modal'

export function EditFoodModal() {
  const [unitMeasurementSelected, setUnitMeasurementSelected] = useState(null)
  const unitMeasurements = ['KG', 'BAG', 'G', 'ML', 'L']

  return (
    <Modal>
      <H3 mb="40px">Fideos</H3>
      <Form
        onSubmit={data => console.log(data)}
        schema={EditFoodInputs}
        defaultValues={{ amount: 'pepe', unitMeasurement: 'L' }}
      >
        <x.div display="grid" gap="36px" px="40px">
          <TextField
            label="Cantidad"
            name="amount"
            placeholder="Ingrese cantidad"
            isDefault={false}
          />
          <x.div display="flex" gap="64px">
            <P w="50%">Unidad de medida</P>
            <SelectUnitMeasurement
              unitMeasurements={unitMeasurements}
              unitMeasurementSelected={unitMeasurementSelected}
              getUnitMeasurementSelected={setUnitMeasurementSelected}
              pb="6px"
              borderBottom={1}
            />
          </x.div>
        </x.div>
        <x.div display="flex" gap="39px" mt="60px">
          <Button text="CANCELAR" />
          <Button text="GUARDAR" />
        </x.div>
      </Form>
    </Modal>
  )
}
