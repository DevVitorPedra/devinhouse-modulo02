import React, { useContext, useState } from 'react'
import { StyledSearch } from './styles/StyledSearchBar'
import { SearchContext } from '../SearchContext/SearchContext'



export default function SearchBar() {
    const { value, setValue } = useContext(SearchContext)
    const [search, setSearch] = useState(value)
    
  
    const handleChange = (inputValue) => {
        setSearch(inputValue)
        setValue(inputValue)
    }

    return (
        <form  >
            <StyledSearch onChange={(e) => handleChange(e.target.value)} name="searchInput" value={search} placeholder="Pesquisar" type="text" />
        </form>

    )
}
