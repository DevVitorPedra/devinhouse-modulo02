

export default function commentSave (id,name,email,details){
        const comment = {
            name:name,
            email:email,
            comment:details,
            likes:0
        }
        if(localStorage.getItem(id)){
                const gameComments = JSON.parse(localStorage.getItem(id))
                gameComments.push(comment)
                localStorage.setItem(id, JSON.stringify(gameComments))
        }else{
        localStorage.setItem(id, JSON.stringify([comment]))
        }
}
