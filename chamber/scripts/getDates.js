let curentDate = new Date();
let year = curentDate.getFullYear();


document.querySelector('#year').innerHTML = year;

document.querySelector('#lastModified').innerHTML = `Last Modified: ${document.lastModified}`;

document.querySelector('#timestamp').value = curentDate