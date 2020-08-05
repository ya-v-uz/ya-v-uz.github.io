const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-link-container");
    let navbarOpen = false;
    
   
     
     
    burger.addEventListener("click", () => {
        nav.classList.toggle("nav-active");
       
        
    
    
    });
    
   
    
 
 
 }
 

    const socialSlide = () => {
    let social = false; 
    var skype = document.getElementById("skype")
    var discord = document.getElementById("discord") 
    var mail = document.getElementById("mail") 
    var  telegram = document.getElementById("telegram") 
    var spotify = document.getElementById("spotify") 
   
    const contactblock = document.querySelector(".contactmeblock");
    const contactactive = document.querySelector(".contactmeblock-active");


    skype.addEventListener("hover", () => {
        contactactive.classList.toggle("contactmeblock-active");
        social = true;
    
    
    });


 } 

  

  
  

     


     
     
  
  
  
 
 
 

 navSlide();
 
 


 