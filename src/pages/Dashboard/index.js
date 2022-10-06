import { x } from '@xstyled/styled-components'
import { CenterCard } from 'components/CenterCard'
import { H1, P } from 'components/font-styles'
import { Layout } from 'core/Layout'
import { useCenters } from 'hooks/centers/queries/getCenters'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Form } from 'components/Form'
import { SelectDepartaments } from 'components/SelectDepartaments'
import { SelectZones } from 'components/SelectZones'
import { SearchBar } from 'components/SearchBar'

const Dashboard = () => {
  const navigate = useNavigate()
  const { isLoading, data: centers } = useCenters()
  const [centerQuery, setCenterQuery] = useState({
    name: undefined,
    zone: undefined,
    departament: undefined,
    text: undefined,
  })

  const filterCenters = centerQuery => {
    if (centerQuery.name) {
      return centers.filter(center =>
        center.name.toLowerCase().startsWith(centerQuery.name.toLowerCase()),
      )
    }

    if (centerQuery.departament) {
      return centers?.filter(
        center =>
          center.departament.toLowerCase() ===
          centerQuery.departament.toLowerCase(),
      )
    }

    if (centerQuery.zone) {
      return centers?.filter(
        center => center.zone.toLowerCase() === centerQuery.zone.toLowerCase(),
      )
    }

    return centers
  }

  const centersFiltered = filterCenters(centerQuery)

  // const departamentsFiltered = centers
  //   ?.filter(
  //     ({ departament }, index) =>
  //       centers?.map(({ departament }) => departament).indexOf(departament) ===
  //       index,
  //   )
  //   .map(({ departament }) => departament)

  const departaments = [
    'Artigas',
    'Canelones',
    'Cerro',
    'Colonia',
    'Durazno',
    'Flores',
    'Florida',
    'Lavalleja',
    'Maldonado',
    'Montevideo',
    'Paysandú',
    'Río Negro',
    'Rivera',
    'Rocha',
    'Salto',
    'San José',
    'Soriano',
    'Tacuarembó',
    'Treinta y Tres',
  ]

  const zones = ['Borro', 'Centro']

  return (
    !isLoading && (
      <Layout>
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
            <SearchBar getDepartamentSearched={setCenterQuery} />
            <x.div
              w="100%"
              display="flex"
              flexDirection={{ _: 'column', lg: 'unset' }}
              justifyContent="start"
              alignItems="start"
              gap="30px"
            >
              <SelectDepartaments
                departaments={departaments}
                departamentSelected={centerQuery.departament}
                getDepartamentSelected={setCenterQuery}
              />
              <SelectZones
                zones={zones}
                zoneSelected={centerQuery.zone}
                getZoneSelected={setCenterQuery}
              />
            </x.div>
          </x.div>
        </Form>
        {centerQuery.text && <P mb="20px">{centerQuery.text}</P>}
        <x.div w="100%" display="grid" gap="60px">
          {centersFiltered?.map(center => (
            <CenterCard
              key={center.id}
              img={center.photo}
              name={center.name}
              foods={center.foods}
              numberVolunteersRequired={center.numberVolunteersRequired}
              onClick={() => navigate(`/center/${center.id}`)}
            />
          ))}
        </x.div>
      </Layout>
    )
  )
}

export default Dashboard
