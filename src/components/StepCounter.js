import { x } from '@xstyled/styled-components'
import { P } from './font-styles'
import PropTypes from 'prop-types'

const StepCounter = ({ step }) => {
  return (
    <x.div w="95px" py="4px" bg="blue" color="white" borderRadius={100} textAlign="center">
      <P>{step}/3</P>
    </x.div>
  )
}

StepCounter.propTypes = {
  step: PropTypes.number.isRequired,
}

export { StepCounter }
