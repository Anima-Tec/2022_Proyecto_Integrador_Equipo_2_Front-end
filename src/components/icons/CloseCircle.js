import { theme } from 'config/theme';
import PropTypes from 'prop-types';

const { colors } = theme;

export function CloseCircle({ color = 'icon-black', ...rest }) {
  return (
    <svg
      width="22"
      height="21"
      viewBox="0 0 22 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      cursor="pointer"
      {...rest}
    >
      <path
        d="M10.9997 19.25C16.0413 19.25 20.1663 15.3125 20.1663 10.5C20.1663 5.6875 16.0413 1.75 10.9997 1.75C5.95801 1.75 1.83301 5.6875 1.83301 10.5C1.83301 15.3125 5.95801 19.25 10.9997 19.25Z"
        stroke={colors[color] ?? color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.40625 12.9762L13.5946 8.02374"
        stroke={colors[color] ?? color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.5946 12.9762L8.40625 8.02374"
        stroke={colors[color] ?? color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

CloseCircle.propTypes = {
  color: PropTypes.string
};
