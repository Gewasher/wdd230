const darkButton = document.querySelector('#mode');
const body = document.querySelector('body')

darkButton.addEventListener('click', () => {
    body.classList.toggle('dark');;
    darkButton.classList.toggle('dark');
});