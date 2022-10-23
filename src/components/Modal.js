import { x } from '@xstyled/styled-components'
import PropTypes from 'prop-types'

const Modal = ({ children }) => {
  return (
    <x.div
      w="100%"
      h="100vh"
      position="fixed"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bg="rgba(0, 0, 0, 0.64)"
    >
      <x.div w="50%" p="40px" bg="white" borderRadius="20px">
        {children}
      </x.div>
    </x.div>
  )
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
}

export { Modal }
