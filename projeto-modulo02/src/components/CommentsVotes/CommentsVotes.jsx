import React, { useState } from 'react'
import updateComments from '../../utils/updateComments'
import { StyledDownVote, StyledUpVote, StyledVotesCard } from './styles/StyledVotes'

export default function CommentsVotes(props) {
    const { gameId, id, } = props
    const [likes, setLikes] = useState(props.likes)


    const handleUpVote = () => {

        setLikes(likes + 1)
        updateComments(gameId, id, likes + 1)
    }
    const handleDownVote = () => {
        setLikes(likes - 1)
        updateComments(gameId, id, likes - 1)
    }

    return (
        <StyledVotesCard>
            <StyledUpVote onClick={handleUpVote}><i className="bi bi-hand-thumbs-up-fill"></i></StyledUpVote>
            <p>{likes}</p>
            <StyledDownVote onClick={handleDownVote}><i className="bi bi-hand-thumbs-down-fill"></i></StyledDownVote>
        </StyledVotesCard>
    )
}
