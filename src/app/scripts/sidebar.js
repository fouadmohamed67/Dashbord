window.onload=function(){
    const body=document.querySelector("body");
    const sidebar=document.querySelector(".sidebar");
    const toggle=document.querySelector(".toggle-button");
    const search=document.querySelector(".search");
    const mood=document.querySelector(".mode-part");
    const toggleSwitch=document.querySelector(".toggle-switch");
    const modeText=document.querySelector(".mode-text")
    const navbar=document .querySelector(".navbar")
    
    if(toggleSwitch){
        toggleSwitch.addEventListener("click",()=>{
            body.classList.toggle("dark");
            if(body.classList.contains("dark"))
            {
                modeText.innerHTML="Light Mode"
            }
            else
            {
                modeText.innerHTML="Dark Mode"   
            }
        })
    }
   if(toggle){
    toggle.addEventListener("click",()=>{
        sidebar.classList.toggle("close");
        navbar.classList.toggle("short")
    
    })  
   }
    document.addEventListener("DOMContentLoaded", function() {
        if (window.innerWidth < 1700) {
            sidebar.classList.toggle("close");
            navbar.classList.toggle("short")
        };
    }); 
    

    //navbar
    const btnDropdown=document.querySelector(".btn-dropdown");
    const rightSide=document.querySelector(".right-side")
    
   if(btnDropdown){
    btnDropdown.addEventListener("click",()=>{ 
        rightSide.classList.toggle("closed") 
        rightSide.classList.toggle("opend") 
    
    })  
   } 

    
  }