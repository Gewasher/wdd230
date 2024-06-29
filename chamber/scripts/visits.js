const visitMessage = document.querySelector("#visitClock")

let oldDate = Number(window.localStorage.getItem("visitDate")) || 0;
let newDate = Date.now()
if (oldDate !== 0) {
    if (oldDate - newDate < 86400000) {
        visitMessage.innerHTML = `Back so soon! Awesome!`
    }
    else {
        let days = (oldDate - newDate) / 86400000
        let daysRound = Math.round(days)
        visitMessage.innerHTML = `You visited ${daysRound} days ago.`
    }


} else {
    visitMessage.innerHTML = `Welcome! Let us know if you have any questions.`;
}



localStorage.setItem("visitDate", newDate);
