
const currentWeather = document.querySelector('#currentWeather');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=42.53&lon=-113.79&units=imperial&appid=bda805848458a1b3e30a17174f44d20c';



async function apiFetch() {
    try {
        let response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            //console.log(data);
            displayResults(data)

        }
        else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }

};
function displayResults(data) {

    const span2 = document.createElement('span');
    const span3 = document.createElement('span');
    let desc = data.weather[0].description;

    const weatherIcon = document.createElement('img');
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;


    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    weatherIcon.setAttribute('loading', 'lazy');
    weatherIcon.setAttribute('width', '20');
    weatherIcon.setAttribute('height', '20');


    span2.innerHTML = `  ${data.main.temp}&deg;F`;
    span3.innerHTML = ` - ${desc}`;


    currentWeather.appendChild(span2)
    currentWeather.appendChild(span3)

}


apiFetch()