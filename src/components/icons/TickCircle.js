import { theme } from 'config/theme'
import PropTypes from 'prop-types'
import { x } from '@xstyled/styled-components'

const { colors } = theme

export function TickCircle({ color = 'icon-black', ...rest }) {
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
        d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
        stroke={colors[color] ?? color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.75 12L10.58 14.83L16.25 9.17"
        stroke={colors[color] ?? color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </x.svg>
  )
}

TickCircle.propTypes = {
  color: PropTypes.string,
}
