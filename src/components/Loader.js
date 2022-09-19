import { x } from '@xstyled/styled-components';
import { theme } from 'config/theme';
import PropTypes from 'prop-types';

const { colors } = theme;

const Spinner = ({ color = 'white' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{
        margin: 'auto',
        background: 'none',
        display: 'block',
        shapeRendering: 'auto'
      }}
      width="200px"
      height="200px"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <circle
        cx="50"
        cy="50"
        fill="none"
        stroke={colors[color] ?? color}
        strokeWidth="5"
        r="35"
        strokeDasharray="164.93361431346415 56.97787143782138"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          repeatCount="indefinite"
          dur="1s"
          values="0 50 50;360 50 50"
          keyTimes="0;1"
        ></animateTransform>
      </circle>
    </svg>
  );
};

export function FullScreenLoader({ ...rest }) {
  return (
    <x.div
      position="fixed"
      top="0px"
      left="0px"
      zIndex="10000"
      w="100%"
      h="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bg="rgba(0,0,0,0.6)"
      {...rest}
    >
      <Spinner />
    </x.div>
  );
}

Spinner.propTypes = {
  color: PropTypes.string
};
