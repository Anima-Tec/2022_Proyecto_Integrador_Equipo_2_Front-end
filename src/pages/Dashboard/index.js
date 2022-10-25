import { x } from '@xstyled/styled-components'
import { CenterCard } from 'components/CenterCard'
import { H1, P } from 'components/font-styles'
import { Layout } from 'core/Layout'
import { useCenters } from 'hooks/centers/queries/getCenters'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Form } from 'components/Form'
import { SelectDepartments } from 'components/SelectDepartments'
import { SelectZones } from 'components/SelectZones'
import { SearchBar } from 'components/SearchBar'
import { useDepartments } from 'hooks/departments/queries/getDepartments'
import { CloseCircle } from 'components/icons/CloseCircle'

const Dashboard = () => {
  const navigate = useNavigate()
  const { data: departments } = useDepartments()
  const { data: centers } = useCenters()

  const [departmentSelected, setDepartmentSelected] = useState({
    name: null,
    zoneSelected: {
      id: null,
      departmentId: null,
      name: null,
    },
    zones: [],
  })

  const [centerQuery, setCenterQuery] = useState({
    centerName: undefined,
    departmentSelected,
  })

  const clearFilters = () => {
    setDepartmentSelected({
      name: null,
      zoneSelected: {
        id: null,
        departmentId: null,
        name: null,
      },
      zones: [],
    })
    setCenterQuery({
      centerName: undefined,
      departmentSelected,
    })
  }

  // TODO: Refactor this with querys on the Backend
  const filterCenters = centerQuery => {
    const { centerName, departmentSelected } = centerQuery

    if (
      centerName &&
      departmentSelected.name &&
      departmentSelected.zoneSelected.name
    ) {
      return centers?.filter(
        center =>
          center.name.toLowerCase().startsWith(centerName.toLowerCase()) &&
          center.department.name.toLowerCase() ===
            departmentSelected.name.toLowerCase() &&
          center.zone.name.toLowerCase() ===
            departmentSelected.zoneSelected.name.toLowerCase(),
      )
    }

    if (centerName && departmentSelected.name) {
      return centers?.filter(
        center =>
          center.name.toLowerCase().startsWith(centerName.toLowerCase()) &&
          center.department.name.toLowerCase() ===
            departmentSelected.name.toLowerCase(),
      )
    }

    if (departmentSelected.name && departmentSelected.zoneSelected.name) {
      return centers?.filter(
        center =>
          center.department.name.toLowerCase() ===
            departmentSelected.name.toLowerCase() &&
          center.zone.name.toLowerCase() ===
            departmentSelected.zoneSelected.name.toLowerCase(),
      )
    }

    if (centerName) {
      return centers.filter(center =>
        center.name.toLowerCase().startsWith(centerName.toLowerCase()),
      )
    }

    if (departmentSelected.name) {
      return centers?.filter(
        center =>
          center.department.name.toLowerCase() ===
          departmentSelected.name.toLowerCase(),
      )
    }

    return centers
  }

  const centersFiltered = filterCenters(centerQuery)

  // TODO: Refactor
  const textQueryResult =
    centerQuery.centerName &&
    centerQuery.departmentSelected.name &&
    centerQuery.departmentSelected.zoneSelected.name
      ? `Centros filtrados por el nombre ${centerQuery.centerName} en el departamento ${centerQuery.departmentSelected.name} y en la zona ${centerQuery.departmentSelected.zoneSelected.name}`
      : centerQuery.centerName && centerQuery.departmentSelected.name
      ? `Centros filtrados por el nombre ${centerQuery.centerName} en el departamento ${centerQuery.departmentSelected.name}`
      : centerQuery.departmentSelected.name &&
        centerQuery.departmentSelected.zoneSelected.name
      ? `Centros filtrados por el departamento ${centerQuery.departmentSelected.name} y en la zona ${centerQuery.departmentSelected.zoneSelected.name}`
      : centerQuery.centerName
      ? `Centros filtrados por el nombre ${centerQuery.centerName}`
      : centerQuery.departmentSelected.name &&
        `Centros filtrados por el departamento ${centerQuery.departmentSelected.name}`

  useEffect(() => {
    setCenterQuery(prevState => ({
      ...prevState,
      departmentSelected,
    }))
  }, [departmentSelected])

  return (
    departments &&
    centers && (
      <Layout showNavBar>
        <H1 textAlign="center">Centros</H1>
        <Form>
          <x.div
            w="100%"
            display="flex"
            flexDirection="column"
            gap="30px"
            mt="32px"
            mb="48px"
          >
            <SearchBar name="centerName" getCenterSearched={setCenterQuery} />
            <x.div
              w="100%"
              display="flex"
              flexDirection={{ _: 'column', lg: 'unset' }}
              justifyContent="start"
              alignItems="start"
              gap="30px"
            >
              <SelectDepartments
                departments={departments}
                departmentSelected={centerQuery.departmentSelected.name}
                getDepartmentSelected={setDepartmentSelected}
                py="11px"
                px="41px"
                pr="60px"
                mrArrow="19px"
                borderRadius={20}
                boxShadow="0px 4px 20px rgba(0, 0, 0, 0.1)"
              />
              <SelectZones
                departmentSelected={centerQuery.departmentSelected}
                zoneSelected={centerQuery.departmentSelected.zoneSelected.id}
                getZoneSelected={setDepartmentSelected}
                py="11px"
                px="41px"
                pr="60px"
                mrArrow="19px"
                borderRadius={20}
                boxShadow="0px 4px 20px rgba(0, 0, 0, 0.1)"
              />
              {textQueryResult && (
                <x.button
                  bg="white"
                  py="11px"
                  px="41px"
                  borderRadius={20}
                  boxShadow="0px 4px 20px rgba(0, 0, 0, 0.1)"
                  outline="none"
                  onClick={clearFilters}
                >
                  <CloseCircle />
                </x.button>
              )}
            </x.div>
          </x.div>
        </Form>

        {textQueryResult && <P mb="20px">{textQueryResult}</P>}
        <x.div w="100%" display="grid" gap="60px">
          {centersFiltered?.map(center => (
            <CenterCard
              key={center.id}
              img={center.photo}
              name={center.name}
              foods={center.foods}
              numberVolunteersRequired={center.numberVolunteersRequired}
              onClick={() => navigate(`/centers/${center.id}`)}
            />
          ))}
        </x.div>
      </Layout>
    )
  )
}

export default Dashboard
