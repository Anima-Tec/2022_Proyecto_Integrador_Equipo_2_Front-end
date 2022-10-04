import { x } from '@xstyled/styled-components'
import PropTypes from 'prop-types'

export function Quote({ children, ...rest }) {
  return (
    <x.blockquote
      fontFamily="Merriweather"
      fontWeight="light"
      fontStyle="italic"
      fontSize="sm"
      lineHeight={6}
      {...rest}
    >
      {children}
    </x.blockquote>
  )
}

Quote.propTypes = {
  children: PropTypes.node.isRequired,
}
