const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-link-container");
    let navbarOpen = false;
    
   
     
     
    burger.addEventListener("click", () => {
        nav.classList.toggle("nav-active");

        
        
    
    
    });
    

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


function go404() {
     
    
    window.location.replace("404.html");

 
}
  
  
 function returnHome() {
    window.location.replace("index.html");
 }


animateBurger()
 navSlide();