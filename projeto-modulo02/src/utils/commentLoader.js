export default function commentLoader(id){
  console.log('commentLoader',id)
  const storageComments = JSON.parse(localStorage.getItem(id))
  console.log("storageComments",storageComments)
    return storageComments
}