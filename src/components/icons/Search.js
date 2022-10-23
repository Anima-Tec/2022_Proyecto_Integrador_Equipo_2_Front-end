import { x } from '@xstyled/styled-components'
import { theme } from 'config/theme'
import PropTypes from 'prop-types'

const { colors } = theme

export function Search({ color = 'icon-black', ...rest }) {
  return (
    <x.svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M8.5 14C11.5376 14 14 11.5376 14 8.5C14 5.46243 11.5376 3 8.5 3C5.46243 3 3 5.46243 3 8.5C3 11.5376 5.46243 14 8.5 14Z"
        stroke={colors[color] ?? color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 17L13 14"
        stroke={colors[color] ?? color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </x.svg>
  )
}

Search.propTypes = {
  color: PropTypes.string,
}
