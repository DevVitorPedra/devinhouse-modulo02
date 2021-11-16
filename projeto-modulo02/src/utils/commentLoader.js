export default function commentLoader(id){
  const storageComments = JSON.parse(localStorage.getItem(id))
    return storageComments
}