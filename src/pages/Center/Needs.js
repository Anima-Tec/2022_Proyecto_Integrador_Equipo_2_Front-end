import * as yup from 'yup'
import { x } from '@xstyled/styled-components'
import { H1, H2, P } from 'components/font-styles'
import { Layout } from 'core/Layout'
import { useCurrentUser } from 'hooks/users/queries/getCurrentUser'
import { FoodItem } from 'components/FoodItem'
import { EditFoodModal } from 'components/EditFoodModal'
import { RemoveFoodModal } from 'components/RemoveFoodModal'
import { AddFoodModal } from 'components/AddFoodModal'
import { useState } from 'react'
import { TextField } from 'components/TextField'
import { Form } from 'components/Form'
import { useMutation } from 'react-query'
import { UserService } from 'networking/services/UserService'
import { useAuth } from 'contexts/auth'
import { TickCircle } from 'components/icons'
import toast from 'react-hot-toast'

const CenterFoods = () => {
  const {
    isLoading,
    data: center,
    refetch: refetchDataCenter,
  } = useCurrentUser()

  const { accessToken, user: currentUser } = useAuth()

  const [showModal, setShowModal] = useState({
    isAddFood: false,
    isEditFood: false,
    isRemoveFood: false,
  })
  const [foodData, setFoodData] = useState({
    id: null,
    centerId: null,
    name: null,
    amount: null,
    unitMeasurement: null,
  })

  const schema = yup.object({
    numberVolunteersRequired: yup
      .string()
      .required('')
      .matches(/^[0-9-+]+$/, ' '),
  })

  const { mutateAsync: updateCenterMutation } = useMutation(({ where, data }) =>
    UserService.updateUser({ where, data }),
  )

  const handleOnSubmit = async data => {
    try {
      if (
        data.numberVolunteersRequired !==
        center?.numberVolunteersRequired.toString()
      ) {
        await updateCenterMutation({
          where: { id: currentUser.id, rol: currentUser.rol },
          data: {
            ...data,
            accessToken,
          },
        })
        refetchDataCenter()
        return toast.success('Datos actualizados correctamente')
      }
      toast.error('Debe cambiar el valor actual')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    !isLoading && (
      <Layout showNavBar>
        <H1 textAlign="center">Necesidades</H1>
        <Form
          schema={schema}
          defaultValues={{
            numberVolunteersRequired: center?.numberVolunteersRequired,
          }}
          onSubmit={handleOnSubmit}
        >
          <x.div
            w="100%"
            display="flex"
            justifyContent="flex-start"
            alignItems="center"
            gap="20px"
            mt="33px"
          >
            <P>Voluntarios requeridos</P>
            <x.div display="flex" alignItems="flex-start">
              <TextField
                p={0}
                name="numberVolunteersRequired"
                isDefault={false}
              />
              <x.button
                type="submit"
                p={0}
                borderRadius={100}
                bg="white"
                borderColor="blue"
                style={{ outline: 'none' }}
              >
                <TickCircle />
              </x.button>
            </x.div>
          </x.div>
        </Form>
        <x.div w="100%" mt="33px">
          <x.div
            w="100%"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb="50px"
          >
            <H2>Lista de alimentos</H2>
            <x.button
              bg="white"
              py="10px"
              px="29px"
              borderRadius={100}
              style={{ outline: 'none' }}
              boxShadow="0px 4px 20px rgba(0, 0, 0, 0.1)"
              onClick={() =>
                setShowModal(prevState => ({ ...prevState, isAddFood: true }))
              }
            >
              Añadir
            </x.button>
          </x.div>
          <x.div w="100%" display="grid" gap="40px">
            {center?.foods.map(food => (
              <FoodItem
                key={food.id}
                food={food}
                showFoodModal={setShowModal}
                getFoodData={setFoodData}
              />
            ))}
          </x.div>
          <AddFoodModal
            food={foodData}
            showModal={showModal.isAddFood}
            setShowFoodModal={setShowModal}
            onAfterSubmit={refetchDataCenter}
          />
          <EditFoodModal
            intialValues={foodData}
            showModal={showModal.isEditFood}
            setShowFoodModal={setShowModal}
            onAfterSubmit={refetchDataCenter}
          />
          <RemoveFoodModal
            food={foodData}
            showModal={showModal.isRemoveFood}
            setShowFoodModal={setShowModal}
            onAfterSubmit={refetchDataCenter}
          />
        </x.div>
      </Layout>
    )
  )
}

export default CenterFoods
