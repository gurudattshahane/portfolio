const links = document.querySelectorAll('.navbar ul li');
const checkbox = document.querySelector("#hamburger");

links.forEach(link => {
    link.addEventListener('click', ()=>{
        links.forEach(li =>{ li.classList.remove("active");});
        link.classList.add("active");
        checkbox.checked = false;
    })
});