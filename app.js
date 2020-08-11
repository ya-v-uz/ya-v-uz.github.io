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


  function displayModal(){
    var modal = document.getElementById("modal");
    var card = document.getElementById("card");
    var close = document.getElementById("popup-burger");
    
    card.onclick = function() {
        modal.style.display = "block";
        
    }
    close.onclick = function() {
        modal.style.display = "none";
    }
    
    window.onclick = function(clicker) {
       
        if(clicker.target == modal) {
        modal.style.display = "none";
       
    }
    }          
  
}

 function displayModal1(){
    var modal1 = document.getElementById("modal1");
    var card1 = document.getElementById("card1");
    var close1 = document.getElementById("popup-burger1");
    card1.onclick = function() {
        modal1.style.display = "block";
        
    }
    close1.onclick = function() {
        modal1.style.display = "none";
    }
    
    window.onclick = function(clicker) {
       
        if(clicker.target == modal1) {
        modal1.style.display = "none";
       
    }
    }          
  
} 

function displayModal2(){
    var modal2 = document.getElementById("modal2");
    var card2 = document.getElementById("card2");
    var close2 = document.getElementById("popup-burger2");
    card2.onclick = function() {
        modal2.style.display = "block";
        
    }
    close2.onclick = function() {
        modal2.style.display = "none";
    }
    
    window.onclick = function(clicker) {
       
        if(clicker.target == modal2) {
        modal2.style.display = "none";
       
    }
    }          
  
} 


function displayModal3() {
    var modal3 = document.getElementById("modal3");
    var card3 = document.getElementById("card3");
    var close3 = document.getElementById("popup-burger3");
    card3.onclick = function() {
        modal3.style.display = "block";
        
    }
    close3.onclick = function() {
        modal3.style.display = "none";
    }
    
    window.onclick = function(click) {
       
        if(click.target == modal3) {
        modal3.style.display = "none";
       
    }
    }          
  
} 

function displayModal4() {
    var modal4 = document.getElementById("modal4");
    var card4 = document.getElementById("card4");
    var close4 = document.getElementById("popup-burger4");
    
    
  
    
    card4.onclick = function() {
        modal4.style.display = "block";
        isPop = true;
        
    }
    
    close4.onclick = function() {
        modal4.style.display = "none";
        isPop = false;
    }         
    
    window.onclick = function() {
       
        if(click.target == modal3) {
        modal4.style.display = "none";
    }
    
    

}          
  
} 



function animateBurger() {
    var toggle = false
    var burger = document.getElementById("burgero");
    var burger1 = document.getElementById("burger1");
    var burger2 = document.getElementById("burger2");
    var burger3 = document.getElementById("burger3");

    burger.addEventListener("click" , () => {
        
        if(toggle == false ) { 
        burger1.style.opacity = 0; 
        burger2.style.transform = "translateY(8px) rotate(45deg) scale(1.2) ";
        burger3.style.transform = "rotate(-45deg) scale(1.2)"; 
       
        toggle = true;
        }
        else{
        burger1.style.opacity= 1; 
        burger2.style.transform = "rotate(-180deg)";
         burger3.style.transform = "rotate(-180deg)"; 
        toggle = false;
        }
   
    });

     

}


function firstAnime() {
   
    

    anime({ //alt

         targets:'#greenrain1',
         scaleY: '1200',
         translateY: '-150',
         direction:'alternate',
         duration:11000,
         
         easing: 'easeInOutQuad'


    });

    anime({ //üst
        targets:'#greenrain2',
        scaleY: '1200',
        translateY: '200',
        
        
        
        
        duration:12000,
        
        easing: 'easeInOutQuad' 


    });

    anime({
        targets:'#greenrain3',
        width: '200',
        translateX: '400',
        
        
        
        duration:3000,
      
        easing: 'easeInOutQuad' 


    });

  }   


  
 
 firstAnime()
animateBurger()
displayModal()
displayModal1()
displayModal2()
displayModal3()
displayModal4()
navSlide();


 //window.addEventListener('scroll', bodyboxslide());


 