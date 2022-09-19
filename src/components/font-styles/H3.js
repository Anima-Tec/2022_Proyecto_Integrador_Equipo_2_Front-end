import { x } from '@xstyled/styled-components';
import PropTypes from 'prop-types';

export function H3({ children, ...rest }) {
  return (
    <x.h3
      fontFamily="IBM Plex Sans"
      fontWeight="medium"
      fontStyle="normal"
      fontSize="1rem"
      lineHeight="1.3rem"
      {...rest}
    >
      {children}
    </x.h3>
  );
}

H3.propTypes = {
  children: PropTypes.string.isRequired
};
