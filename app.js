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
const fullDate = document.querySelector('.full-date')
const header = document.getElementById('home');
const backTop = document.querySelector('.back-top');

const img = document.querySelector('.one img');
const p = document.querySelector('.one p');
const arrowIcon = document.querySelector('.one i');

// dynamic full year setup
fullYear.innerText = new Date().getFullYear();
console.log(fullYear);

//dynamic full date setup
let day = weekdays[new Date().getDay()];
let month = months[new Date().getMonth()];
const date = new Date().getDate();
let year = new Date().getFullYear();

fullDate.innerText = `${day}, ${month} ${date}, ${year}`;

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
