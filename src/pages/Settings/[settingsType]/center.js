import { x } from '@xstyled/styled-components'
import { Form } from 'components/Form'
import { TextField } from 'components/TextField'
import { Layout } from 'core/Layout'
import {
  CenterSettingsInputs,
  validateImage,
} from 'validations/center-validations'
import { Button } from 'components/buttons/Button'
import { H1 } from 'components/font-styles'
import { useEffect, useState } from 'react'
import { FileField } from 'components/FileField'
import { SelectDepartments } from 'components/SelectDepartments'
import { useDepartments } from 'hooks/departments/queries/getDepartments'
import { SelectZones } from 'components/SelectZones'
import { useCurrentUser } from 'hooks/users/queries/getCurrentUser'
import { useUpdateUser } from 'hooks/users/mutations/updateUser'
import toast from 'react-hot-toast'

const Register = () => {
  const { mutateAsync: updateUserMutation } = useUpdateUser()
  const { data: center, refetch: refetchCurrentUser } = useCurrentUser()
  const { data: departments } = useDepartments()
  const [departmentSelected, setDepartmentSelected] = useState({
    name: null,
    zoneSelected: {
      id: null,
      departmentId: null,
      name: null,
    },
    zones: [],
  })

  const [dataImage, setDataImage] = useState({
    imageSelected: null,
    showPreviewImage: false,
    input: null,
  })

  const inititalValues = {
    name: center?.user?.name,
    email: center?.user?.email,
    street: center?.street,
    numberDoor: center?.numberDoor,
    phone: center?.phone,
    description: center?.description,
    zoneId: center?.zoneId,
    // photo: center?.photo,
  }

  const handleSubmit = async formData => {
    try {
      await updateUserMutation(checkIfNotSameData(formData))
      refetchCurrentUser()
      toast.success('Datos actualizados')
    } catch (error) {
      toast.error(error.message)
    }
  }

  const checkIfNotSameData = newData => {
    let index = 0
    const newObject = {}
    Object.entries(newData).forEach(([key, value]) => {
      if (value === inititalValues[key]) {
        index++
      } else {
        Object.assign(newObject, {
          [key]: value,
        })
      }

      console.log(key, value)
    })

    if (index === Object.keys(inititalValues).length) {
      throw new Error('Debes cambiar almenos un campo')
    }
    return newObject
  }

  // function dataURLtoFile(dataurl, filename) {
  //   const arr = dataurl.split(',')
  //   const mime = arr[0].match(/:(.*?);/)[1]
  //   const bstr = atob(arr[1])
  //   let n = bstr.length
  //   const u8arr = new Uint8Array(n)

  //   while (n--) {
  //     u8arr[n] = bstr.charCodeAt(n)
  //   }

  //   return new File([u8arr], filename, { type: mime })
  // }

  // const file = dataURLtoFile(inititalValues.photo, `${center.name}`)

  useEffect(() => {
    const initialZones = departments?.find(
      department => department.name === center?.department?.name,
    )?.zones

    const initialDepartament = {
      name: center?.department.name,
      zoneSelected: {
        id: center?.zone.id,
        departmentId: center?.zone.departmentId,
        name: center?.zone.name,
      },
      zones: initialZones,
    }

    setDepartmentSelected(initialDepartament)
  }, [departments])

  return (
    center &&
    departments &&
    inititalValues &&
    departmentSelected.zones && (
      <Layout>
        <H1 w="100%" mb="65px">
          Ajustes
        </H1>
        <Form
          defaultValues={inititalValues}
          schema={CenterSettingsInputs}
          onSubmit={data =>
            handleSubmit({
              ...data,
              rol: 'CENTER',
              photo: dataImage.imageSelected,
            })
          }
        >
          <x.div display="flex" flexDirection="column" gap="40px">
            <TextField
              label="Nombre"
              name="name"
              placeholder="Ingresar nombre"
            />
            <SelectDepartments
              label="Departamentos"
              departments={departments}
              departmentSelected={departmentSelected.name}
              getDepartmentSelected={setDepartmentSelected}
              pt="24px"
              pb="6px"
              borderBottom={1}
            />
            <SelectZones
              label="Zonas"
              departmentSelected={departmentSelected}
              zoneSelected={departmentSelected.zoneSelected.id}
              getZoneSelected={setDepartmentSelected}
              pt="24px"
              pb="6px"
              borderBottom={1}
            />
            <TextField
              label="Calle"
              name="street"
              placeholder="Ingresar calle"
            />
            <TextField
              label="Numero de puerta"
              name="numberDoor"
              placeholder="Ingresar numero puerta"
            />
            <TextField
              label="Email"
              name="email"
              placeholder="Ingresar email"
            />
            <TextField
              type="password"
              label="Contraseña"
              name="password"
              placeholder="Ingresar contraseña"
            />
            <TextField
              label="Telefono"
              name="phone"
              placeholder="Ingresar telefono"
            />
            <TextField
              label="Descripcion (opcional)"
              name="description"
              placeholder="Ingresar descripcion"
            />
            <x.div
              display="flex"
              flexDirection={{ _: 'column', lg: 'row' }}
              alignItems={{ _: 'flex-start', lg: 'center' }}
              justifyContent="space-between"
              gap="20px"
            >
              <FileField
                label="Adjuntar imagen del centro (opcional)"
                name="photo"
                // value={inititalValues.photo}
                onChange={e => {
                  const file = e.target.files[0]
                  const isImage = validateImage(file)
                  if (isImage) {
                    try {
                      const reader = new FileReader()
                      reader.onload = () => {
                        const base64Img = reader.result
                        setDataImage({
                          imageSelected: base64Img,
                          input: e,
                          showPreviewImage: dataImage.showPreviewImage,
                        })
                      }
                      reader.readAsDataURL(file)
                    } catch (err) {
                      console.log(err)
                    }
                  }
                }}
              />
              {dataImage.imageSelected && (
                <x.div
                  w="100%"
                  display="flex"
                  justifyContent={{ _: 'flex-start', lg: 'flex-end' }}
                  gap="20px"
                >
                  <>
                    <Button
                      text={
                        dataImage.showPreviewImage
                          ? 'Ocultar imagen'
                          : 'Ver imagen'
                      }
                      w={{ _: '100%', lg: '40%' }}
                      onClick={() =>
                        setDataImage(({ showPreviewImage, ...restData }) => {
                          return {
                            ...restData,
                            showPreviewImage: !showPreviewImage,
                          }
                        })
                      }
                      type="button"
                    />
                    <Button
                      text="Borrar imagen"
                      w={{ _: '100%', lg: '40%' }}
                      type="button"
                      onClick={() => {
                        dataImage.input.target.value = ''
                        setDataImage({
                          imageSelected: undefined,
                          showPreviewImage: false,
                          input: undefined,
                        })
                      }}
                    />
                  </>
                </x.div>
              )}
            </x.div>
            {dataImage.imageSelected && dataImage.showPreviewImage && (
              <x.img
                src={dataImage.imageSelected}
                w={{ _: '50%', lg: '300px' }}
                m="auto"
              />
            )}
            <Button text="GUARDAR" />
          </x.div>
        </Form>
      </Layout>
    )
  )
}

export default Register
