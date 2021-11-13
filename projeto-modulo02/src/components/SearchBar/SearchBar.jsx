import React,{ useContext,useState} from 'react'
import { StyledSearch } from './styles/StyledSearchBar'
import { SearchContext } from '../SearchContext/SearchContext'



export default function SearchBar() {
    const [search,setSearch] = useState()
 const {value, setValue} = useContext(SearchContext)
   
 
    const handleChange= (inputValue) =>{
        setSearch(inputValue)
        setValue(inputValue)
    }

    return (
        <form  >
            <StyledSearch onChange={(e)=>handleChange(e.target.value)} name="searchInput" value={search} placeholder="Pesquisar" type="text" />
        </form>
        
    )
}
