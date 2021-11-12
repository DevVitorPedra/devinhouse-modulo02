import React from 'react'
import { StyledShowCommentP, StyledShowCommentsCard, StyledShowDownVote, StyledShowName, StyledShowSingleComment, StyledShowUpVote, StyledShowVotes } from './styles/StyledShowComments'

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
                    <StyledShowVotes>
                        <StyledShowUpVote><i className="bi bi-hand-thumbs-up-fill"></i></StyledShowUpVote>
                        <p>{props.likes}</p>
                        <StyledShowDownVote><i className="bi bi-hand-thumbs-down-fill"></i></StyledShowDownVote>
                    </StyledShowVotes>
                </StyledShowSingleComment>
            </StyledShowCommentsCard>
    )
}
