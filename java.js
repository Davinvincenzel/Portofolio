var navbarLinks = document.querySelectorAll('.navbar-nav a');
var sections = document.querySelectorAll('section');



navbarLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        navbarLinks.forEach(function(link) {
            link.classList.remove('active');
        });
        this.classList.add('active');
    });
});

const nav = document.getElementById('nav');

window.addEventListener('scroll', function() {
    let scrollposition = window.scrollY + window.innerHeight / 2; 

    if (scrollposition >= 60 +  window.innerHeight / 2  ) {
        nav.classList.add('nav-dark');
    } else if(scrollposition <= 60 +  window.innerHeight / 2) {
        nav.classList.remove('nav-dark');
    }

    sections.forEach(function(section) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionMiddle = sectionTop + sectionHeight / 2;

        if (sectionMiddle <= scrollposition && sectionTop + sectionHeight > scrollposition) {
            const current = document.querySelector('.active');
            if (current) {
                current.classList.remove('active');
            }
            let id = section.getAttribute('id');
            let navbarLink = document.querySelector(`.navbar-nav a[href*=${id}]`);
            if (navbarLink) {
                navbarLink.classList.add('active');
            }
        }
    });
});

window.onload = function() {
    const navbar = document.querySelector('.navbar');
    const body = document.querySelector('body');
    const button = document.getElementById('custom1');

    if (!localStorage.getItem('buttonClicked')) {
        body.classList.add('no-scroll');
    } else {
        navbar.classList.add('show-navbar');
    }

    button.addEventListener('click', function() {
        navbar.classList.add('show-navbar');
        body.classList.remove('no-scroll');

        localStorage.setItem('buttonClicked', 'true');


        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
};
const words = ["Universitas Multi Data Palembang","Sistem Informasi"];
const el = document.querySelector("#typewriter");

const sleepTime = 100;
let currWordIndex = 0;

const sleep = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time));
};

const effect = async () => {
  while (true) {
    currWord = words[currWordIndex];

    for (let i = 0; i < currWord.length; i++) {
      el.innerText = currWord.substring(0, i + 1);
      await sleep(sleepTime);
    }

    await sleep(1000);

    if (currWordIndex >= words.length - 1) {
      currWordIndex = 0;
      await sleep(1000);
    } else currWordIndex++;
  }
};

effect();