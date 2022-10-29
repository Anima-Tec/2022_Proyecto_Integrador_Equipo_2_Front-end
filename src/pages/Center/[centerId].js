import { x } from '@xstyled/styled-components'
import { H2, P } from 'components/font-styles'
import { ContactButton } from 'components/buttons/ContactButton'
import { useParams } from 'react-router-dom'
import { useCenter } from 'hooks/centers/queries/getCenter'
import { NeedList } from 'components/centers/NeedList'
import Error404 from 'pages/Error404'
import { Layout } from 'core/Layout'

const CenterInformation = () => {
  const { centerId } = useParams()

  const {
    isLoading,
    error,
    data: center,
  } = useCenter({
    where: { id: centerId },
  })

  if (error?.response?.status === 404) {
    return <Error404 />
  }

  return (
    <>
      {!isLoading && (
        <Layout>
          <H2 fontWeight="bold" mb="35px">
            {center?.name}
          </H2>
          {center?.description && (
            <P mb="35px" textAlign="justify">
              {center?.description}
            </P>
          )}
          <x.div w="100%" mb="42px">
            <P fontWeight="bold" mb="20px">
              Ubicación
            </P>
            <x.img src="/mapa-ilustration.png" w="100%" mb="5px" />
            <P fontSize="12px" textAlign="center" color="#555555">
              {center?.street} {center?.numberDoor}, {center?.zone.name}
            </P>
          </x.div>
          <NeedList
            foods={center?.foods}
            numberVolunteersRequired={center?.numberVolunteersRequired}
          />
          <x.div
            w="100%"
            display="flex"
            flexDirection={{ _: 'column', lg: 'unset' }}
            gap="44px"
            mt="86px"
          >
            <ContactButton
              type="GMAIL"
              onClick={() => {
                // https://stackoverflow.com/questions/6988355/open-gmail-on-mailto-action
                // `mailto:${center?.email}?subject=Testing out mailto!&body=This is only a test!`
                const subject = 'Donacion de ...'
                const body = '¡Hola! Soy un donador. Tengo ....'
                const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${center?.email}&su=${subject}&body=${body}`

                window.open(gmailURL, '_blank')
              }}
            />
            {/* Verifica si comienza con 0 y tiene 9 digitos. EJ: 094742845 */}
            {center?.phone.startsWith(0) && center?.phone.length === 9 && (
              <ContactButton
                type="WHATSAPP"
                onClick={() => {
                  const text = '¡Hola! Soy un donador. Tengo ....'
                  const numberCode = '+598'
                  const whatsappURL = `https://api.whatsapp.com/send?phone=${numberCode}${center?.phone}&text=${text}`

                  window.open(whatsappURL, '_blank')
                }}
              />
            )}
          </x.div>
        </Layout>
      )}
    </>
  )
}

export default CenterInformation
