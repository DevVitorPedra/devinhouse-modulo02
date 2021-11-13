import commentLoader from '../utils/commentLoader'
export default function updateComments(gameIdx,commentIdx,operation){
        const comments = commentLoader(gameIdx)
        comments[commentIdx].likes = operation
        localStorage.setItem(gameIdx,JSON.stringify(comments))
     
}

//gameid e comment idx não estão chegando, 