/* Changing background of current navbar section */
const links = document.querySelectorAll('.navbar ul li');
const checkbox = document.querySelector("#hamburger");

links.forEach(link => {
    link.addEventListener('click', ()=>{
        links.forEach(li =>{ li.classList.remove("active");});
        link.classList.add("active");
        checkbox.checked = false;
    })
});

let myNav = document.querySelector('header');
window.onscroll = function () { 
    "use strict";
    if (window.scrollY >= myNav.scrollHeight ) {
        myNav.classList.add("navbar-bg-colored");
        myNav.classList.remove("navbar-bg-transparent");
    } 
    else {
        myNav.classList.add("navbar-bg-transparent");
        myNav.classList.remove("navbar-bg-colored");
    }
    
    // Changing background of navbar list based on position
    console.log(window.scrollY);
    if(window.scrollY <= (window.innerHeight/2)){
        links.forEach(li =>{ li.classList.remove("active");});
        links[0].classList.add('active');
    }else{
        links.forEach(li =>{ li.classList.remove("active");});
        links[3].classList.add('active');
    }
};


const skills_data = document.querySelectorAll('.skills-data');
const skills_progress_tags = document.querySelectorAll('.skills-progress');
for(let i=0; i < skills_data.length; i++){
    skills_progress_tags[i].style.width = skills_data[i].value + "%";
}

