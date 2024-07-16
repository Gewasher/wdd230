const spotlightsURL = 'https://gewasher.github.io/wdd230/chamber/data/members.json';
const cards = document.querySelector('#spotlight');




async function getMemberData() {
    const response = await fetch(spotlightsURL);

    const data = await response.json();
    console.table(data.members);
    displaySpotlight(data.members);
}



function displaySpotlight(members) {
    let spotlights = selectSpotlights(members, 3)
    console.table(spotlights);
    spotlights.forEach((spotlight) => {
        let card = document.createElement('div');
        let fig = document.createElement('figure');
        let logo = document.createElement('img');
        let company = document.createElement('figcaption');
        let div = document.createElement('div');
        let phone = document.createElement('p');
        let address = document.createElement('p');
        let link = document.createElement('a')

        logo.setAttribute('src', `https://gewasher.github.io/wdd230/chamber/images/${spotlight.image}.webp`);
        logo.setAttribute('alt', `Picture of ${spotlight.name} logo`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '100');
        logo.setAttribute('height', '75');

        link.textContent = spotlight.name;
        link.setAttribute('href', spotlight.link)
        company.appendChild(link)
        fig.appendChild(logo);
        fig.appendChild(company);

        phone.textContent = `${spotlight.phone}`;
        address.textContent = `Adress: ${spotlight.address}`;

        div.appendChild(phone)
        div.appendChild(address)

        card.appendChild(fig)
        card.appendChild(div)

        cards.appendChild(card)


    })
}
function selectSpotlights(members, number) {
    let sgAray = sgSplitter(members);
    while (sgAray.length > 3) {
        let selector = getRandomInt(sgAray.length)
        console.log(selector);
        sgAray.splice(selector, 1)
    }
    return (sgAray)

}

function sgSplitter(members) {
    return (members.filter((member) => member.level == 'Gold' || member.level == 'Silver'))
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}



getMemberData();