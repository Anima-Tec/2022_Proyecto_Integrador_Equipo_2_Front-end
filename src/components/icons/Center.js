import { theme } from 'config/theme'
import PropTypes from 'prop-types'

const { colors } = theme

export function Center({ color = 'icon-black', ...rest }) {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M16.25 27.5H6.25C3.75 27.5 2.5 26.25 2.5 23.75V13.75C2.5 11.25 3.75 10 6.25 10H12.5V23.75C12.5 26.25 13.75 27.5 16.25 27.5Z"
        stroke={colors[color] ?? color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.6375 5C12.5375 5.375 12.5 5.7875 12.5 6.25V10H6.25V7.5C6.25 6.125 7.375 5 8.75 5H12.6375Z"
        stroke={colors[color] ?? color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.5 10V16.25"
        stroke={colors[color] ?? color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.5 10V16.25"
        stroke={colors[color] ?? color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.25 21.25H18.75C18.0625 21.25 17.5 21.8125 17.5 22.5V27.5H22.5V22.5C22.5 21.8125 21.9375 21.25 21.25 21.25Z"
        stroke={colors[color] ?? color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.5 16.25V21.25"
        stroke={colors[color] ?? color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.5 23.75V6.25C12.5 3.75 13.75 2.5 16.25 2.5H23.75C26.25 2.5 27.5 3.75 27.5 6.25V23.75C27.5 26.25 26.25 27.5 23.75 27.5H16.25C13.75 27.5 12.5 26.25 12.5 23.75Z"
        stroke={colors[color] ?? color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

Center.propTypes = {
  color: PropTypes.string,
}
