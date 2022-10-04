import { theme } from 'config/theme'
import PropTypes from 'prop-types'

const { colors } = theme

export function Home({ color = 'icon-black', ...rest }) {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <path
        d="M15 22.5V18.75"
        stroke={colors[color] ?? color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.5876 3.52506L3.92509 10.4626C2.95009 11.2376 2.32509 12.8751 2.53759 14.1001L4.20009 24.0501C4.50009 25.8251 6.20009 27.2626 8.00009 27.2626H22.0001C23.7876 27.2626 25.5001 25.8126 25.8001 24.0501L27.4626 14.1001C27.6626 12.8751 27.0376 11.2376 26.0751 10.4626L17.4126 3.53756C16.0751 2.46256 13.9126 2.46256 12.5876 3.52506Z"
        stroke={colors[color] ?? color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

Home.propTypes = {
  color: PropTypes.string,
}
