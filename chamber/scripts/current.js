
let pathArray = location.pathname.split("/");
let currentPage = `${pathArray[3]}`
let linksArray = document.querySelectorAll('a')


linksArray.forEach((link) => {


    if (link.getAttribute('href') === currentPage) {
        link.classList.add('current')
    }
})
