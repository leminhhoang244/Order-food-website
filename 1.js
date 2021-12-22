// click on off menu
let menu = document.querySelector('#menu-bar');
let navbar=document.querySelector('.navbar');
let section = document.querySelectorAll('section');
menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

//khi on menu thì click vào chỗ nào cũng off menu
for (let i = 0; i < section.length; i++) {
    section[i].onclick=function(){
        menu.classList.remove('fa-times');
        navbar.classList.remove('active');
    }
}

// load trang
function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');
}
function fadeOut(){
    setInterval(loader, 3000);
}
  window.onload = fadeOut();

//scroll
window.onscroll=()=>{
    if(window.scrollY>60)
    {
        document.querySelector('#scroll-top').classList.add('active');
    }
    else
    {
        document.querySelector('#scroll-top').classList.remove('active');
    }
}