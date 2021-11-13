import React,{ useContext, createContext} from 'react'
import { StyledSearch } from './styles/StyledSearchBar'
import * as Yup from 'yup'
import { useFormik } from 'formik'



export default function SearchBar() {

 
   
 
    
    const { handleSubmit, handleChange, values, handleBlur } = useFormik({
        initialValues: {
            searchInput: ''
        },
        validationSchema: Yup.object({
            searchInput: Yup.string()
        }),
        onSubmit: ({ searchInput }) => {
            console.log(searchInput)
        },
        onChange:({ searchInput   })=>{
           
        }
        
            
    })
    return (
        <form onSubmit={handleSubmit} >
            <StyledSearch onBlur={handleBlur} onChange={handleChange} value={values.searchInput} name="searchInput" placeholder="Pesquisar" type="text" />
        </form>
        
    )
}
