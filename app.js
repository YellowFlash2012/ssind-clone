const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];


let fullYear = document.querySelector('.year');
const fullDate = document.querySelector('.full-date');
const dailyDate = document.querySelectorAll('.daily-date');

const header = document.getElementById('home');
const backTop = document.querySelector('.back-top');

const OpenHamburgerBtn = document.querySelector('.open-hamburger-menu');
const closeHamburgerMenu = document.querySelector('.close-hamburger-menu');
const hamburgerMenu = document.querySelector('.hamburger-menu');

const oneGroups = [...document.querySelectorAll('.one-group')];


const img = document.querySelector('.one-group img');
const p = [...document.querySelectorAll('.one-group p')];
const arrowIcon = [...document.querySelectorAll('.one-group i')];

const stickyBanner = document.querySelector('.banner-ad');

// dynamic full year setup
fullYear.innerText = new Date().getFullYear();


//dynamic full date setup
let day = weekdays[new Date().getDay()];
let month = months[new Date().getMonth()];
const date = new Date().getDate();
let year = new Date().getFullYear();

fullDate.innerText = `${day}, ${month} ${date}, ${year}`;

//dynamic daily date setup
dailyDate.forEach((el) => {
    el.textContent = `${month} ${date}, ${year}`;
})

//dark-light theme setup
const themeChangeBtn = document.querySelector('.dark-light');
const themeIcon = document.querySelector('.theme-icon');

themeChangeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    
});

//fixed-navbar
window.addEventListener('scroll', () => {
    const navHeight = header.getBoundingClientRect().height;
    console.log(navHeight);

    const scrollHeight = window.pageYOffset;
    console.log(scrollHeight);

    if (scrollHeight > navHeight) {
        header.classList.add('fixed-nav');
    } else {
        header.classList.remove('fixed-nav');
    }

    if (scrollHeight > 500) {
        backTop.style.visibility = 'visible';
    } else {
        backTop.style.visibility = 'hidden';
    }
})

//hamburger menu
OpenHamburgerBtn.addEventListener('click', () => {
    hamburgerMenu.style.display = 'block';
    OpenHamburgerBtn.innerHTML = `<i class="fas fa-times fa-2x"></i>`;
    
});

closeHamburgerMenu.addEventListener('click', () => {
    console.log(closeHamburgerMenu);
    hamburgerMenu.style.display = 'none';
    closeHamburgerMenu.innerHTML = `<i class="fas fa-bars fa-2x"></i>`;
});

//weekly-top-5 img dynamic transition of num & arrow setup
oneGroups.forEach((item) => {
    item.addEventListener('mouseenter', (e) => {
        if (e.target === item) {
            p.forEach((item) => {
                item.style.transform = 'translateY(-290px)';
            
        });
        
            arrowIcon.forEach((item) => {
                item.style.transform = 'translateY(2px)';
                item.style.opacity = '1';
            });
        }
        // p.forEach((item) => {
        //     item.style.transform = 'translateY(-290px)';
            
        // });
        
        // arrowIcon.forEach((item) => {
        //     item.style.transform = 'translateY(2px)';
        //     item.style.opacity = '1';
        // });
        
    });

    item.addEventListener('mouseleave', () => {
        p.forEach((item) => {
            item.style.transform = 'translateY(0px)';
        });
        
        arrowIcon.forEach((item) => {
            item.style.opacity = '0';
        });
    })
});

//sticky banner ad setup
window.addEventListener('scroll', () => {
    const scrollHeight = window.pageYOffset;

    if (scrollHeight >= 2278 && scrollHeight <= 2900) {
        stickyBanner.classList.add('fixed-banner-ad');
    } else {
        stickyBanner.classList.remove('fixed-banner-ad');
    }
})