import { x } from '@xstyled/styled-components'
import { Logo } from 'components/Logo'
import PropTypes from 'prop-types'
import { StepCounter } from 'components/StepCounter'

export const TextScreen = ({ children, step }) => {
  return (
    <>
      {step && <StepCounter step={step} />}
      <x.div display="flex" flexDirection="column" alignItems="center">
        <Logo width="303px" height="303px" mb="55px" />
        {children}
      </x.div>
    </>
  )
}

TextScreen.propTypes = {
  children: PropTypes.node.isRequired,
  step: PropTypes.number,
}
