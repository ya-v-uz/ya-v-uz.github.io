const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-link-container");
    let navbarOpen = false;
    
   
     
     
    burger.addEventListener("click", () => {
        nav.classList.toggle("nav-active");
       
        
    
    
    });
    
   
    
 
 
 }
 

    function bodyboxslide() {

        var bodybox = document.querySelector = (".body-box");
        var boxposition = document.getBoundingClientRect().top; 
        var scrposition = window.innerHeight / 2;

        if(scrposition > boxposition) {
            bodybox.classList.add('body-b0x-appear');
        }

    }


     window.addEventListener('scroll', bodyboxslide());




    const socialSlide = () => {
    let social = false; 
    var skype = document.getElementById("skype");
    var discord = document.getElementById("discord") ;
    var mail = document.getElementById("mail");
    var  telegram = document.getElementById("telegram");
    var spotify = document.getElementById("spotify"); 
   
    const contactblock = document.querySelector(".contactmeblock");
    const contactactive = document.querySelector(".contactmeblock-active");


    skype.addEventListener("hover", () => {
        contactactive.classList.toggle("contactmeblock-active");
        social = true;
    
    
    });

 } 

    






 function go404() {
     
    
    window.location.replace("404.html");

 
}
  
  
 function returnHome() {
    window.location.replace("index.html");
 }
     

const popUp = () => {
    const card= document.getElementsByClassName(".cards")
    const bodybox = document.querySelectorAll(".body-box")


    card.addEventListener("click", () => {

        bodybox.classList.toggle(".body-box .cards1");

    });






}


     
     
  
  
  
 
 
 

navSlide();
 popUp();
 


 