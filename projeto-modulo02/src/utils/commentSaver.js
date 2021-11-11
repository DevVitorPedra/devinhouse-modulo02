const storageComments = JSON.parse(localStorage.getItem('comments')) || []


export default function commentSave (name,email,details){

        const comment = {
            name:name,
            email:email,
            comment:details,
            likes:0
        }
        storageComments[storageComments.length] = comment
                console.log(storageComments)
        localStorage.setItem('comments', JSON.stringify(storageComments))

}
