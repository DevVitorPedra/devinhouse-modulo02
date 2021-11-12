import commentLoader from "./commentLoader"

export default function commentUpdater (game,commentIdx,value){
    const oldComments = commentLoader()
    oldComments[commentIdx].comment = value
    localStorage.setItem(game,JSON.stringify(oldComments))
}
