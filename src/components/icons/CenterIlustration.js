import { theme } from 'config/theme'
import PropTypes from 'prop-types'
import { x } from '@xstyled/styled-components'

const { colors } = theme

export function CenterIlustration({ color = 'icon-black', ...rest }) {
  return (
    <x.svg
      width="150"
      height="150"
      viewBox="0 0 150 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M81.25 137.5H31.25C18.75 137.5 12.5 131.25 12.5 118.75V68.75C12.5 56.25 18.75 50 31.25 50H62.5V118.75C62.5 131.25 68.75 137.5 81.25 137.5Z"
        stroke={colors[color] ?? color}
        strokeWidth="3"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M63.1874 25C62.6874 26.875 62.5 28.9375 62.5 31.25V50H31.25V37.5C31.25 30.625 36.875 25 43.75 25H63.1874Z"
        stroke={colors[color] ?? color}
        strokeWidth="3"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M87.5 50V81.25"
        stroke={colors[color] ?? color}
        strokeWidth="3"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M112.5 50V81.25"
        stroke={colors[color] ?? color}
        strokeWidth="3"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M106.25 106.25H93.75C90.3125 106.25 87.5 109.062 87.5 112.5V137.5H112.5V112.5C112.5 109.062 109.688 106.25 106.25 106.25Z"
        stroke={colors[color] ?? color}
        strokeWidth="3"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M37.5 81.25V106.25"
        stroke={colors[color] ?? color}
        strokeWidth="3"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M62.5 118.75V31.25C62.5 18.75 68.75 12.5 81.25 12.5H118.75C131.25 12.5 137.5 18.75 137.5 31.25V118.75C137.5 131.25 131.25 137.5 118.75 137.5H81.25C68.75 137.5 62.5 131.25 62.5 118.75Z"
        stroke={colors[color] ?? color}
        strokeWidth="3"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </x.svg>
  )
}

CenterIlustration.propTypes = {
  color: PropTypes.string,
}
