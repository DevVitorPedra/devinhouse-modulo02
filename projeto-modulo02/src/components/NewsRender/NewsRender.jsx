import React, { useContext } from 'react'

import { StyledLink, StyledNewsCard, StyledNewsDescription, StyledNewsTitle, StyledNewsImg } from './styles/StyledNewsRender'
export default function NewsRender(props) {
    
    
 
    return (
        props.info.map((element, idx) => {
                
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
        })
        
    )
}
