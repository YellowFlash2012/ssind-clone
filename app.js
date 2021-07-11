const fullDate = document.querySelector('.full-date');

fullDate.innerHTML = new Date().getFullYear();

const themeChangeBtn = document.querySelector('.dark-light');
const themeIcon = document.querySelector('.theme-icon');

themeChangeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    
});