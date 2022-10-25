import { x } from '@xstyled/styled-components'
import PropTypes from 'prop-types'
import { animated, useTransition } from 'react-spring'

const Modal = ({ children, hideModal, isOpen }) => {
  const heightTransitions = useTransition(isOpen, {
    from: {
      width: '100%',
      height: '100vh',
      bottom: '-80vh',
      left: '0',
      right: '0',
      top: '0',
      margin: 'auto',
      position: 'fixed',
      zIndex: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    enter: { opacity: 1, bottom: '0' },
    leave: { opacity: 0, bottom: '-80vh' },
  })
  const backgroundTransitions = useTransition(isOpen, {
    from: {
      opacity: 0,
      position: 'fixed',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      backgroundColor: '#000000',
      zIndex: -1,
    },
    enter: { opacity: 0.5 },
    leave: { opacity: 0 },
  })

  return heightTransitions(
    (styles, item) =>
      item && (
        <animated.div style={styles}>
          {backgroundTransitions(
            (styles, item) =>
              item && <animated.div style={styles} onClick={hideModal} />,
          )}
          <x.div w="50%" p="40px" bg="white" borderRadius="20px">
            {children}
          </x.div>
        </animated.div>
      ),
  )
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  hideModal: PropTypes.func.isRequired,
}

export { Modal }
