const links = document.querySelectorAll('.navbar ul li');
const checkbox = document.querySelector("#hamburger");

links.forEach(link => {
    link.addEventListener('click', ()=>{
        links.forEach(li =>{ li.classList.remove("active");});
        link.classList.add("active");
        checkbox.checked = false;
    })
});

const skills_data = document.querySelectorAll('.skills-data');
const skills_progress_tags = document.querySelectorAll('.skills-progress');
for(let i=0; i < skills_data.length; i++){
    skills_progress_tags[i].style.width = skills_data[i].value + "%";
}

