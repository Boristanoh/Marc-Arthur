const projets = document.querySelectorAll("h3")
projets.forEach((projet,index)=>{
    projet.addEventListener("click",function(){
        console.log(projet)
        projet.classList.add("current")
        projets.forEach((projet1,index1)=>{
            if(index != index1){
                projet1.classList.remove("current")
            }

        })
    }
      
    )
       
    
})