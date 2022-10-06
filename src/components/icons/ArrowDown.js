import { x } from '@xstyled/styled-components'
import { theme } from 'config/theme'
import PropTypes from 'prop-types'

const { colors } = theme

export function ArrowDown({ color = 'icon-black', ...rest }) {
  return (
    <x.svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M19.9201 8.94995L13.4001 15.47C12.6301 16.24 11.3701 16.24 10.6001 15.47L4.08008 8.94995"
        stroke={colors[color] ?? color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </x.svg>
  )
}

ArrowDown.propTypes = {
  color: PropTypes.string,
}
