import React, { useContext } from 'react'
import { SearchContext } from '../SearchContext/SearchContext'
import { StyledCommentsInfoCard } from '../Comments/styles/StyledComments'
import { StyledLink, StyledNewsCard, StyledNewsDescription, StyledNewsTitle, StyledNewsImg } from './styles/StyledNewsRender'
export default function NewsRender(props) {

    const { value } = useContext(SearchContext)
    const filtered = props.info.filter((element) => {
        return element.title.toLowerCase().includes(value.toLowerCase())
    })
    

    return (
        <>
         <StyledCommentsInfoCard>
        {(value==='')?<StyledNewsDescription>Todos os resultados ({filtered.length})</StyledNewsDescription>:
        <StyledNewsDescription>Resultados para "{value}" ({filtered.length})</StyledNewsDescription>}
        </StyledCommentsInfoCard>
        {filtered.map((element, idx) => {

            return (
                <StyledLink key={idx + 1} href={element.article_url} target="_blank">
                    <StyledNewsCard >
                        <StyledNewsImg src={element.thumbnail} />
                        <div>
                            <StyledNewsTitle>{element.title}</StyledNewsTitle>
                            <StyledNewsDescription>{element.short_description}</StyledNewsDescription>
                        </div>
                    </StyledNewsCard>
                </StyledLink>
            )
        })}
    </>
    )
}
