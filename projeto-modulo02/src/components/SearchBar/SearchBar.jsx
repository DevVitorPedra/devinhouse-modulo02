import React from 'react'
import { StyledSearch } from './styles/StyledSearchBar'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import {useParams} from 'react-router-dom'

export default function SearchBar() {
    const match=useParams()
    console.log(match.url)
    const { handleSubmit, handleChange, values, handleBlur } = useFormik({
        initialValues: {
            searchInput: ''
        },
        validationSchema: Yup.object({
            searchInput: Yup.string()
        })/*,
        onSubmit: ({ searchInput }) => {
            if (page === 'news') {
                searchNews(searchInput)
            } else if (page === 'gameslist') {
                searchGames(searchInput)
            }
        },
        onChange:({
            if (page === 'news') {
                searchNews(searchInput)
            } else if (page === 'gameslist') {
                searchGames(searchInput)
            }
            
        })
        */

    })
    return (
        <form onSubmit={handleSubmit} >
            <StyledSearch onBlur={handleBlur} onChange={handleChange} value={values.searchInput} name="searchInput" placeholder="Pesquisar" type="text" />
        </form>
        
    )
}
