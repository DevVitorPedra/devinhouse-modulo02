export default function commentLoader(name){
  const storageComments = JSON.parse(localStorage.getItem(name))
    return storageComments
}