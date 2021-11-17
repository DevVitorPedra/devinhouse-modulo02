import React, { useState,useReducer } from 'react'
import updateComments from '../../utils/updateComments'
import { StyledDownVote, StyledUpVote, StyledVotesCard } from './styles/StyledVotes'
import { StyledShowCommentP } from '../ShowComments/styles/StyledShowComments'

const commentReducer = (state, action,) =>{
    console.log('reducer')
        switch (action) {
            case 'UP':
                  return state+=1
            case 'DOWN':
                return state-=1

            default:
                return state
        }
}
export default function CommentsVotes(props) {
    const { gameId, id, } = props
    const [likes, dispatch] = useReducer(commentReducer, props.likes)

    const handleUpVote = () => {
        dispatch("UP")
        updateComments(gameId, id, likes + 1)
    }
    const handleDownVote = () => {
        dispatch("DOWN")
        updateComments(gameId, id, likes - 1)
    }

    return (
        <StyledVotesCard>
            <StyledUpVote onClick={handleUpVote}><i className="bi bi-hand-thumbs-up-fill"></i></StyledUpVote>
            <StyledShowCommentP>{likes}</StyledShowCommentP>
            <StyledDownVote onClick={handleDownVote}><i className="bi bi-hand-thumbs-down-fill"></i></StyledDownVote>
        </StyledVotesCard>
    )
}
