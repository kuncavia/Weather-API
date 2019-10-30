import { weatherPage } from './pages/weatherPage.js';
import { frontPage } from './pages/forntPage.js';
import { config } from './helpers/config.js';

$('#search-city-button').on('click', () => {
    const searchString = $('#search-city-input').val();
    weatherPage.render(searchString);
    // weatherPage.renderThreeHours(searchString);
});

// Front page elements

frontPage.renderSofia();
frontPage.renderPlovdiv();
frontPage.renderVarna();
frontPage.renderLondon();
frontPage.renderPuntaCana();

// Full forecast for choisen city

$('#full-sofia').on('click', () => {
    weatherPage.render('Sofia');
});

$('#full-plovdiv').on('click', () => {
    weatherPage.render('Plovdiv');
});

$('#full-varna').on('click', () => {
    weatherPage.render('Varna');
});

$('#full-london').on('click', () => {
    weatherPage.render('London');
});

$('#full-punta-cana').on('click', () => {
    weatherPage.render('Punta Cana');
});

// Function for set favorite city

$('#favorite-button').on('click', () => {
    const searchString = $('#search-city-input').val();
    localStorage.setItem('#search-city-input', searchString);
});

function fillValueFromStorege() {
    const storagedValue = localStorage.getItem('#search-city-input');
    if (storagedValue) {
        $('#search-city-input').val(storagedValue);
        $('#search-city-button').click();
        $(config.selectors.button).html('');
    }
}

fillValueFromStorege();

// Using keyboard enter button to activate search

addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("search-city-button").click();
    }
});