const projets = document.querySelectorAll("h3")
const bloc1 = document.querySelector(".bloc1")
const bloc2 = document.querySelector(".bloc2")
const bloc3 = document.querySelector(".bloc3")
const bloc4 = document.querySelector(".bloc4")
const tab_bloc = [bloc1,bloc2,bloc3,bloc4]
projets.forEach((projet,index)=>{
    projet.addEventListener("click",function(){
        console.log(projet)
        projet.classList.add("current")
        tab_bloc[index].classList.remove("invisible")
        projets.forEach((projet1,index1)=>{
            if(index != index1){
                projet1.classList.remove("current")
                tab_bloc[index1].classList.add("invisible")
            }

        })
    }
      
    )
       
    
})