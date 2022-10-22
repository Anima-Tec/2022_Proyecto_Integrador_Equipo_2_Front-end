import { x } from '@xstyled/styled-components'
import { Search as SearchIcon } from 'components/icons/Search'
import PropTypes from 'prop-types'
import { useFormContext } from 'react-hook-form'

const SearchBar = ({ name, getCenterSearched }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  const handleOnChange = e => {
    const centerName = e.target.value

    getCenterSearched(prevState => ({
      ...prevState,
      centerName,
    }))
  }

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
        {...register(name)}
        onChange={handleOnChange}
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
      {errors[name] && (
        <x.small color="warning">{errors[name].message}</x.small>
      )}
    </x.div>
  )
}

SearchBar.propTypes = {
  name: PropTypes.string,
  getCenterSearched: PropTypes.func.isRequired,
}

export { SearchBar }
