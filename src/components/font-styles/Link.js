import { x } from '@xstyled/styled-components';
import PropTypes from 'prop-types';

export function Link({ children, ...rest }) {
  return (
    <x.a
      fontFamily="Inter"
      fontWeight="400"
      fontStyle="normal"
      fontSize="16px"
      lineHeight="19px"
      color="black"
      {...rest}
    >
      {children}
    </x.a>
  );
}

Link.propTypes = {
  children: PropTypes.string.isRequired
};
