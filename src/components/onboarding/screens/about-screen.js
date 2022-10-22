import { H2 } from 'components/font-styles'
import { StepCounter } from 'components/StepCounter'
import PropTypes from 'prop-types'
import { CenterCard } from 'components/CenterCard'

export const AboutScreen = ({ step }) => {
  return (
    <>
      <StepCounter step={step} />
      <CenterCard
        img="/center-ilustration.jpeg"
        name="Estadio charrua"
        isOnboarding={true}
      />
      <H2 textAlign="center" mb="197px">
        Podras ver y contactar con centros de alimentos los cuales pueden
        necesitar alimentos o voluntarios.
      </H2>
    </>
  )
}

AboutScreen.propTypes = {
  step: PropTypes.number.isRequired,
}
