require("babel-core/register");
require("babel-polyfill");
import photo from './images/location-marker.svg'
const API = 'https://api.jsonbin.io/b/62498395d96a510f028fde92';
const cards = document.querySelector('.cards__container');

const getPets = async () => {
    const response = await fetch(API);

    return response.json();
}

const createCards = async () => {
    const data = await getPets();

    data.pets.forEach((pet) => {
        const {image, name, age, city, state} = pet;
        const card = document.createElement('div');
        const cardImage = document.createElement('img');
        const cardInformation = document.createElement('div');
        const cardPersonalInfo = document.createElement('div');
        const cardName = document.createElement('p');
        const cardAge = document.createElement('p');
        const cardPlace = document.createElement('div');
        const cardIcon = document.createElement('img');
        const cardLocation = document.createElement('p');
        card.classList.add('card');
        cardImage.classList.add('card__image');
        cardInformation.classList.add('card__information');
        cardPersonalInfo.classList.add('card__personal-info');
        cardName.classList.add('card__name');
        cardAge.classList.add('card__age');
        cardPlace.classList.add('card__place');
        cardIcon.classList.add('card__icon');
        cardLocation.classList.add('card__location');
        cards.appendChild(card);
        cardImage.src = image;
        card.appendChild(cardImage);
        card.appendChild(cardInformation);
        cardInformation.appendChild(cardPersonalInfo);
        cardInformation.appendChild(cardPlace);
        cardName.innerText = name;
        const ageInYears = Math.floor((age / 12) * 10) / 10;
        cardAge.innerText = (ageInYears >= 2)? `${ageInYears} years` : `${ageInYears} year`;
        cardPersonalInfo.appendChild(cardName);
        cardPersonalInfo.appendChild(cardAge);
        cardIcon.src = require('./images/location-marker.svg');
        cardLocation.innerText = `${city} ${state}`;
        cardPlace.appendChild(cardIcon);
        cardPlace.appendChild(cardLocation);
    })

}

createCards();
