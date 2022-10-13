
const link = document.querySelector('.links');

const pages = Array.from(document.querySelectorAll('section'));



/* TODO: create nav dynamically by JS instead of HTML */

function navImplement(){
    for (section of pages) {
        list = document.createElement('li');
        list.innerHTML = `<li  class="nav_link " > <a href=" #${section.id}" data-nav="${section.id}">${section.dataset.nav}</a></li>`;

        link.appendChild(list);
    }
}
// TODO: function calling
navImplement();




/* TODO:  scroling activation  AND Active funtion*/

window.scroling = function() {
    document.querySelectorAll("section").forEach(function(page) {
    let activeLink = link.querySelector(`[data-nav=${page.id}]`);
    if(page.getBoundingClientRect().top >= -400 && page.getBoundingClientRect().top <= 150){

        page.classList.add("active");
        activeLink.classList.add("linkScroll");
       
       
    }
    else{
         page.classList.remove("active");
         activeLink.classList.remove("linkScroll");
       
    }
    });
}
window.addEventListener('scroll' ,scroling);


/* SMooth scrolling*/

link.addEventListener("click" , (event)=> {
event.preventDefault();
if(event.target.dataset.nav){
    document.getElementById(`${event.target.dataset.nav}`).scrollIntoView({behavior: "smooth"});
   
  
}
})



































