import { x } from '@xstyled/styled-components';
import PropTypes from 'prop-types';

export function H2({ children, ...rest }) {
  return (
    <x.h2
      fontFamily="Inter"
      fontWeight="light"
      fontStyle="normal"
      fontSize="2xl"
      lineHeight="1.95rem"
      {...rest}
    >
      {children}
    </x.h2>
  );
}

H2.propTypes = {
  children: PropTypes.node.isRequired
};
