import { x } from '@xstyled/styled-components';
import PropTypes from 'prop-types';

export function H1({ children, ...rest }) {
  return (
    <x.h1
      fontFamily="Inter"
      fontWeight="400"
      fontStyle="normal"
      fontSize="32px"
      lineHeight="39px"
      {...rest}
    >
      {children}
    </x.h1>
  );
}

H1.propTypes = {
  children: PropTypes.node.isRequired
};
