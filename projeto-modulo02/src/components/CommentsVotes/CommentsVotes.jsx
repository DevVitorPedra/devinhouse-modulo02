import React, { useState } from 'react'
import updateComments from '../../utils/updateComments'
import { StyledDownVote, StyledUpVote, StyledVotesCard } from './styles/StyledVotes'

export default function CommentsVotes(props) {
    const [likes,setLikes] = useState(props.likes)

    const handleUpVote = (props)=>  {
        
    }
    const handleDownVote = ()=>  {
        console.log("Down vote")
    }

    return (
        <StyledVotesCard>
            <StyledUpVote  onClick={handleUpVote}><i className="bi bi-hand-thumbs-up-fill"></i></StyledUpVote>
            <p>{likes}</p>
            <StyledDownVote onClick={(props)=>{handleDownVote(props)}}><i className="bi bi-hand-thumbs-down-fill"></i></StyledDownVote>
        </StyledVotesCard>
    )
}
