import { x } from '@xstyled/styled-components';
import { useNavigate } from 'react-router-dom';
import { useHover } from 'hooks/useHover';
import { User, Center } from 'components/icons/index';
import { P } from 'components/font-styles';
import PropTypes from 'prop-types';

export function RegisterType({ type, ...rest }) {
  const navigate = useNavigate();
  const [hoverRef, isHovered] = useHover();

  return (
    <x.div
      ref={hoverRef}
      py="40px"
      px="59px"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      gap="4px"
      borderRadius="100%"
      cursor="pointer"
      transition
      transitionDuration={300}
      bg={isHovered ? 'white' : 'blue'}
      color={isHovered ? 'blue' : 'white'}
      borderColor="blue"
      border={1}
      onClick={() =>
        navigate(
          type === 'DONATOR'
            ? '/auth/signup/donator'
            : type === 'CENTER' && '/auth/signup/center'
        )
      }
      {...rest}
    >
      {type === 'DONATOR' && (
        <>
          <User
            width="87px"
            height="87px"
            color={isHovered ? 'blue' : 'white'}
            style={{
              transitionDuration: 200
            }}
          />
          <P>Donador</P>
        </>
      )}
      {type === 'CENTER' && (
        <>
          <Center
            width="87px"
            height="87px"
            color={isHovered ? 'blue' : 'white'}
            style={{
              transitionDuration: 200
            }}
          />
          <P>Centro</P>
        </>
      )}
    </x.div>
  );
}

RegisterType.propTypes = {
  type: PropTypes.oneOf(['DONATOR', 'CENTER']).isRequired
};
