import { x } from '@xstyled/styled-components'
import { Form } from 'components/Form'
import { TextField } from 'components/TextField'
import { Layout } from 'core/Layout'
import {
  CenterRegisterInputs,
  validateImage,
} from 'validations/center-validations'
import { Button } from 'components/buttons/Button'
import { H1, P } from 'components/font-styles'
import { useSignUp } from 'hooks/auth/mutations/useSignUp'
import { useState } from 'react'
import { FileField } from 'components/FileField'
import { SelectDepartments } from 'components/SelectDepartments'
import { useDepartments } from 'hooks/departments/queries/getDepartments'
import { SelectZones } from 'components/SelectZones'

const Register = () => {
  const [mutateAsync, error] = useSignUp()
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

  const handleSubmit = async formData => {
    try {
      await mutateAsync(formData)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    departments && (
      <Layout>
        <H1 w="100%" mb="65px">
          Registro
        </H1>
        <Form
          schema={CenterRegisterInputs}
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
            {error && <P color="warning">{error}</P>}
            <Button text="REGISTRARSE" />
          </x.div>
        </Form>
      </Layout>
    )
  )
}

export default Register
