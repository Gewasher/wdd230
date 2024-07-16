const urlF = 'https://api.openweathermap.org/data/2.5/forecast?lat=42.53&lon=-113.79&exclude=minutelt,hourly&units=imperial&appid=bda805848458a1b3e30a17174f44d20c';
const forecast = document.querySelector('#forecast')

let todayDate = new Date();
let curentDay = todayDate.getDay()
//console.log(curentDay)

async function apiFetch() {
    try {
        let response = await fetch(urlF);
        if (response.ok) {
            const data = await response.json();
            //console.log(data);
            displayForecast(data)

        }
        else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }

};

function displayForecast(data) {
    let day1 = document.createElement('p')
    let day2 = document.createElement('p')
    let day3 = document.createElement('p')

    let dayOne = getDaySlice(data, 1)
    let dayTwo = getDaySlice(data, 2)
    let dayThree = getDaySlice(data, 3);

    maxOne = getMaxTemp(dayOne);
    maxTwo = getMaxTemp(dayTwo);
    maxThree = getMaxTemp(dayThree);

    minOne = getMinTemp(dayOne);
    minTwo = getMinTemp(dayTwo);
    minThree = getMinTemp(dayThree);




    day1.textContent = `${getWeekday(dayOne)} - High: ${maxOne}°F Low: ${minOne}°F`
    day2.textContent = `${getWeekday(dayTwo)} - High: ${maxTwo}°F Low: ${minTwo}°F`
    day3.textContent = `${getWeekday(dayThree)} - High: ${maxThree}°F Low: ${minThree}°F`

    forecast.appendChild(day1)
    forecast.appendChild(day2)
    forecast.appendChild(day3)

}

function getDaySlice(data, number) {
    number = curentDay + number;

    if (number >= 7) {
        number = number - 7
    }


    return (data.list.filter((window) => new Date(window.dt_txt).getDay() === number))


}

function getMaxTemp(day) {
    let array = []
    day.forEach(window => {
        array.push(window.main.temp_max)
    });
    return (Math.max(...array))
}

function getMinTemp(day) {
    let array = []
    day.forEach(window => {
        array.push(window.main.temp_min)
    });
    return (Math.min(...array))
}

function getWeekday(day) {
    let d = new Date(day[0].dt_txt)
    let dayNum = d.getDay()

    if (dayNum === 0) {
        return ('Sunday')
    } else if (dayNum === 1) {
        return ('Monday')
    } else if (dayNum === 2) {
        return ('Tuesday')
    } else if (dayNum === 3) {
        return ('Wednesday')
    } else if (dayNum === 4) {
        return ('Thursday')
    } else if (dayNum === 5) {
        return ('Friday')
    } else if (dayNum === 6) {
        return ('Saturday')
    }

}

apiFetch()