const serv = document.querySelectorAll('.services-link');
const serv_nav = document.querySelector('.services-nav');

serv.forEach(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault();
        serv_nav.classList.toggle('active');
    }); 
});