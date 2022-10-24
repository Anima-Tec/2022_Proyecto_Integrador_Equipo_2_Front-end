import { x } from '@xstyled/styled-components'
import { P } from 'components/font-styles'
import { Button } from './buttons/Button'
import { Modal } from './Modal'
import PropTypes from 'prop-types'
import { useAuth } from 'contexts/auth'
import { useMutation } from 'react-query'
import { CenterService } from 'networking/services/CenterService'

export function RemoveFoodModal({
  food,
  showModal,
  setShowFoodModal,
  onAfterSubmit,
}) {
  const { accessToken } = useAuth()

  const { mutateAsync: deleteFoodMutation } = useMutation(({ where, data }) =>
    CenterService.deleteFood({ where, data }),
  )

  const hideModal = () => {
    setShowFoodModal({
      isAddFood: false,
      isEditFood: false,
      isRemoveFood: false,
    })
  }

  const removeFood = async () => {
    try {
      await deleteFoodMutation({
        where: {
          foodId: food.id,
          centerId: food.centerId,
        },
        data: {
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
      <P textAlign="center" mb="40px">
        ¿Estas seguro que desea eliminar el alimento?
      </P>
      <x.div display="flex" gap="39px">
        <Button text="CANCELAR" onClick={hideModal} type="button" />
        <Button text="ELMINAR" onClick={removeFood} />
      </x.div>
    </Modal>
  )
}

const foodData = {
  id: PropTypes.string,
  name: PropTypes.string,
  amount: PropTypes.number,
  unitMeasurement: PropTypes.string,
}

RemoveFoodModal.propTypes = {
  food: PropTypes.shape(foodData).isRequired,
  showModal: PropTypes.bool.isRequired,
  setShowFoodModal: PropTypes.func.isRequired,
  onAfterSubmit: PropTypes.func.isRequired,
}
