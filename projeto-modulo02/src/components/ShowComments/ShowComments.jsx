import React from 'react'
import CommentsVotes from '../CommentsVotes/CommentsVotes'
import { StyledShowCommentP, StyledShowCommentsCard, StyledShowName, StyledShowSingleComment } from './styles/StyledShowComments'

export default function ShowComments(props) {
    return (
        <StyledShowCommentsCard>
            <StyledShowSingleComment>
                <StyledShowSingleComment>
                    <StyledShowName>{props.name}</StyledShowName>
                    <br />
                    <StyledShowCommentP>
                        {props.comment}
                    </StyledShowCommentP>
                </StyledShowSingleComment>
                <CommentsVotes gameId={props.gameId} id={props.id} likes={props.likes} />
            </StyledShowSingleComment>
        </StyledShowCommentsCard>
    )
}
