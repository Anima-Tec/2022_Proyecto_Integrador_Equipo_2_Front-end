import { x } from '@xstyled/styled-components';
import PropTypes from 'prop-types';

export function Small({ children, ...rest }) {
  return (
    <x.small
      fontFamily="Inter"
      fontWeight="normal"
      fontStyle="normal"
      fontSize="xs"
      lineHeight="12px"
      {...rest}
    >
      {children}
    </x.small>
  );
}

Small.propTypes = {
  children: PropTypes.node.isRequired
};
