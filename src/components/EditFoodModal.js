import { x } from '@xstyled/styled-components'
import { H3, P } from 'components/font-styles'
import { Button } from './buttons/Button'
import { Form } from './Form'
import { TextField } from './TextField'
import { SelectUnitMeasurement } from './SelectUnitMeasurement'
import { useState } from 'react'
import { EditFoodInputs } from 'validations/food-validations'
import { Modal } from './Modal'
import PropTypes from 'prop-types'
import { CenterService } from 'networking/services/CenterService'
import { useMutation } from 'react-query'
import { useAuth } from 'contexts/auth'

export function EditFoodModal({
  intialValues,
  showModal,
  setShowFoodModal,
  onAfterSubmit,
}) {
  const { accessToken } = useAuth()
  const [error, setError] = useState(null)
  const [unitMeasurementSelected, setUnitMeasurementSelected] = useState(null)
  const unitMeasurements = ['KG', 'BAG', 'G', 'ML', 'L']

  const { mutateAsync: updateFoodMutation } = useMutation(({ where, data }) =>
    CenterService.updateFood({ where, data }),
  )

  const hideModal = () => {
    setShowFoodModal({
      isAddFood: false,
      isEditFood: false,
      isRemoveFood: false,
    })
    setError(null)
  }

  const handleOnSubmit = async foodFormData => {
    try {
      if (
        foodFormData.amount === intialValues.amount.toString() &&
        foodFormData.unitMeasurement === intialValues.unitMeasurement
      ) {
        return setError('Debes por lo menos cambiar un campo')
      }
      await updateFoodMutation({
        where: {
          foodId: intialValues.id,
          centerId: intialValues.centerId,
        },
        data: {
          amount: foodFormData.amount,
          unitMeasurement: foodFormData.unitMeasurement,
          accessToken,
        },
      })
      onAfterSubmit()
      hideModal()
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Modal hideModal={hideModal} isOpen={showModal}>
      <H3 mb="40px">{intialValues.name}</H3>
      <Form
        onSubmit={data => handleOnSubmit(data)}
        schema={EditFoodInputs}
        defaultValues={intialValues}
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
        <x.div display="flex" flexDirection="column" gap="39px" mt="60px">
          {error && (
            <P textAlign="center" color="warning">
              {error}
            </P>
          )}
          <x.div display="flex" gap="39px">
            <Button text="CANCELAR" onClick={hideModal} type="button" />
            <Button text="GUARDAR" type="submit" />
          </x.div>
        </x.div>
      </Form>
    </Modal>
  )
}

const foodData = {
  id: PropTypes.string,
  name: PropTypes.string,
  amount: PropTypes.number,
  unitMeasurement: PropTypes.string,
}
EditFoodModal.propTypes = {
  intialValues: PropTypes.shape(foodData).isRequired,
  showModal: PropTypes.bool.isRequired,
  setShowFoodModal: PropTypes.func.isRequired,
  onAfterSubmit: PropTypes.func.isRequired,
}
