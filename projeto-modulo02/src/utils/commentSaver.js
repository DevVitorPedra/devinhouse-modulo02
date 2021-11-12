

export default function commentSave (game,name,email,details){
        
        
        const comment = {

            name:name,
            email:email,
            comment:details,
            likes:0
        }
        
     
        
        if(localStorage.getItem(game)){
                const gameComments = JSON.parse(localStorage.getItem(game))
                gameComments.push(comment)
            
          localStorage.setItem(game, JSON.stringify(gameComments))
        }else{

        localStorage.setItem(game, JSON.stringify([comment]))
        }
}
