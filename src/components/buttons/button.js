import { x } from '@xstyled/styled-components';
import PropTypes from 'prop-types';

const ButtonStyleType = {
  primary: 'primary',
  minimal: 'minimal'
};

export default function Button({ buttonStyle = 'primary', text, ...rest }) {
  return (
    <x.button
      w="100%"
      py="13px"
      borderRadius={100}
      transition
      transitionDuration={200}
      bg={{
        _:
          buttonStyle === 'primary'
            ? 'blue'
            : buttonStyle === 'minimal' && 'white',
        hover:
          buttonStyle === 'primary'
            ? 'white'
            : buttonStyle === 'minimal' && 'blue'
      }}
      color={{
        _:
          buttonStyle === 'primary'
            ? 'white'
            : buttonStyle === 'minimal' && 'blue',
        hover:
          buttonStyle === 'primary'
            ? 'blue'
            : buttonStyle === 'minimal' && 'white'
      }}
      borderColor="blue"
      border={1}
      {...rest}
    >
      {text}
    </x.button>
  );
}

Button.propTypes = {
  buttonStyle: PropTypes.oneOf(Object.keys(ButtonStyleType)),
  text: PropTypes.string.isRequired
};
