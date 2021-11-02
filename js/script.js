let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

window.onscroll = () =>{
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
};
/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
  const header = document.getElementById('header')
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)
/*=============== SHOW SCROLL UP ===============*/
function scrollUp(){
  const scrollUp = document.getElementById('scroll-up');
  // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop : true,
    grabCursor: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
    },
});
/*============== Mouse cursor ===========*/

let cursor1 = document.querySelector('.cursor-1');
let cursor2 = document.querySelector('.cursor-2');

window.onmousemove = (e) =>{
    cursor1.style.top = e.pageY + 'px';
    cursor1.style.left = e.pageX + 'px';
    cursor2.style.top = e.pageY + 'px';
    cursor2.style.left = e.pageX + 'px';
}

document.querySelectorAll('a').forEach(links =>{

    links.onmouseenter = () =>{
        cursor1.classList.add('active');
        cursor2.classList.add('active');
    }

    links.onmouseleave = () =>{
        cursor1.classList.remove('active');
        cursor2.classList.remove('active');
    }

});

/*============== Theme toggler ===========*/
let themeToggler = document.querySelector('#theme-toggler');

themeToggler.onclick = () => {
  themeToggler.classList.toggle('fa-sun');
    if(themeToggler.classList.contains('fa-sun')) {
      document.body.classList.add('active');
    }else {
      document.body.classList.remove('active');
    }
}

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});



/*SCROLL HOME*/
sr.reveal('.content',{});
sr.reveal('.h-btn',{delay: 200});
sr.reveal('.main-home-img',{delay: 400});
sr.reveal('.share',{ interval: 200});


/*SCROLL ABOUT*/
sr.reveal('.about-img',{});
sr.reveal('.heading',{delay: 400});
sr.reveal('.content',{delay: 400});
sr.reveal('.ab-btn'),{delay: 500};
sr.reveal('.icons-container'),{delay: 500};

/*SCROLL SKILLS*/
sr.reveal('.skills',{});
sr.reveal('.progress',{});
sr.reveal('h3',{interval: 200});
sr.reveal('.bar',{delay: 600});

/*SCROLL SERVICES*/
sr.reveal('.box',{interval: 200});

/*SCROLL CONTACT*/
sr.reveal('.image',{interval: 200});
sr.reveal('.c-btn',{interval: 200});
sr.reveal('.fab',{interval: 200});
