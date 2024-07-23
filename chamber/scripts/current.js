
let pathArray = location.pathname.split("/");
let currentPage = `${pathArray[2]}`
let linksArray = document.querySelectorAll('a')


linksArray.forEach((link) => {


    if (link.getAttribute('href') === currentPage) {
        link.classList.add('current')
    }
})
