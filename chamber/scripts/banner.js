const banner = document.querySelector('.hide');
const x = document.querySelector('.x');
const wDay = new Date().getDay();

function hideBanner() {
    banner.classList.remove('banner')
    banner.classList.add('hide');
}

x.addEventListener('click', () => {
    hideBanner();
});
function checkDay() {
    if (wDay <= 3 && wDay != 0) {
        banner.classList.remove('hide')
        banner.classList.add('banner');
    }
}
checkDay()
