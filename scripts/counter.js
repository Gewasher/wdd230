const counter = document.querySelector("#visits")

let numVisits = Number(window.localStorage.getItem("visitCount")) || 0;

if (numVisits !== 0) {
    counter.innerHTML = `visits: ${numVisits}`;

} else {
    counter.innerHTML = `It's your first visit! Welcome!`;
}

numVisits++

localStorage.setItem("visitCount", numVisits);
