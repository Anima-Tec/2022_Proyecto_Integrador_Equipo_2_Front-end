import { x } from '@xstyled/styled-components';
import PropTypes from 'prop-types';
import { P } from 'components/font-styles';

export const ContactType = ['GMAIL', 'WHATSAPP'];

const ContactButton = ({ type, ...rest }) => {
  return (
    <x.button
      w="100%"
      py="13px"
      display="flex"
      justifyContent="center"
      alignItems="center"
      gap="5px"
      borderRadius={100}
      transition
      transitionDuration={300}
      bg={type === 'GMAIL' ? 'red-mail' : 'green-wpp'}
      color="white"
      style={{ outline: 'none' }}
      {...rest}
    >
      <x.img src={type === 'GMAIL' ? '/gmail-logo.png' : '/wpp-logo.png'} />
      <P>CONTACTARSE</P>
    </x.button>
  );
};

export { ContactButton };

ContactButton.propTypes = {
  type: PropTypes.oneOf(ContactType).isRequired
};
