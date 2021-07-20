const fullDate = document.querySelector('.full-date');

const img = document.querySelector('.one img');
const p = document.querySelector('.one p');
const arrowIcon = document.querySelector('.one i');

// full date setup
fullDate.innerText = new Date().getFullYear();
console.log(fullDate);

//dark-light theme setup
const themeChangeBtn = document.querySelector('.dark-light');
const themeIcon = document.querySelector('.theme-icon');

themeChangeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    
});

//hover effect on img
