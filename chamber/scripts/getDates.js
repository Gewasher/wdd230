let curentDate = new Date();
let year = curentDate.getFullYear();
const timeStamp = document.querySelector('#timestamp') || [];


document.querySelector('#year').innerHTML = year;

document.querySelector('#lastModified').innerHTML = `Last Modified: ${document.lastModified}`;

timeStamp.value = curentDate