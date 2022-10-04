import { x } from '@xstyled/styled-components'
import { H2 } from 'components/font-styles'
import { TextScreen } from 'components/onboarding/screens/text-screen'
import { AboutScreen } from 'components/onboarding/screens/about-screen'
import { CenterInformationScreen } from 'components/onboarding/screens/center-information-screen'
import { CenterFoodScreen } from './screens/center-food-screen'
import PropTypes from 'prop-types'

const OnboardingStep = ({ user }) => {
  switch (user.onboardingStepPosition) {
    case 1:
      return <AboutScreen step={user.onboardingStepPosition} />

    case 2:
      return user.rol === 'CENTER' ? (
        <CenterFoodScreen step={user.onboardingStepPosition} />
      ) : (
        <CenterInformationScreen step={user.onboardingStepPosition} />
      )

    case 3:
      return (
        <TextScreen step={user.onboardingStepPosition}>
          <H2 textAlign="center" w="80%">
            ¡{user.name} comienza a contactarte con los centros de caridad!
          </H2>
        </TextScreen>
      )

    default:
      return (
        <TextScreen>
          <H2 textAlign="center" w="80%">
            ¡<x.span fontWeight="bold">Bienvenido {user.name} a ALIDAR</x.span>! Donde podras aportar tu granito de
            arena donando comida a quienes necesitan.
          </H2>
        </TextScreen>
      )
  }
}

OnboardingStep.propTypes = {
  user: PropTypes.any.isRequired,
}

export { OnboardingStep }
