import { x } from '@xstyled/styled-components'
import { Search as SearchIcon } from 'components/icons/Search'
import PropTypes from 'prop-types'

const SearchBar = ({ getDepartamentSearched }) => {
  return (
    <x.div w="100%" position="relative">
      <x.input
        w="100%"
        py="12px"
        pl="31px"
        pr="56px"
        borderRadius={20}
        outline="none"
        placeholder="Buscar centro por nombre"
        boxShadow="0px 4px 20px rgba(0, 0, 0, 0.1)"
        onChange={e =>
          getDepartamentSearched({
            name: e.target.value,
            text:
              e.target.value &&
              `Centros filtrados por el nombre: ${e.target.value}`,
          })
        }
      />
      <SearchIcon
        position="absolute"
        top={0}
        right={0}
        bottom={0}
        m="auto"
        mr="25px"
        cursor="pointer"
      />
    </x.div>
  )
}

SearchBar.propTypes = {
  getDepartamentSearched: PropTypes.func.isRequired,
}

export { SearchBar }
