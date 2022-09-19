import { x } from '@xstyled/styled-components';
import PropTypes from 'prop-types';

export function Small({ children, ...rest }) {
  return (
    <x.small
      fontFamily="Open Sans"
      fontWeight="normal"
      fontStyle="normal"
      fontSize="xs"
      lineHeight={6}
      {...rest}
    >
      {children}
    </x.small>
  );
}

Small.propTypes = {
  children: PropTypes.string.isRequired
};
