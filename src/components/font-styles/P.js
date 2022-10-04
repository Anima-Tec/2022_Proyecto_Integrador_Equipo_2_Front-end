import { x } from '@xstyled/styled-components'
import PropTypes from 'prop-types'

export function P({ children, ...rest }) {
  return (
    <x.p
      fontFamily="Inter"
      fontWeight="400"
      fontStyle="normal"
      fontSize="16px"
      // lineHeight="30px"
      {...rest}
    >
      {children}
    </x.p>
  )
}

P.propTypes = {
  children: PropTypes.node.isRequired,
}
