import { config } from '../helpers/config.js';
import { data } from '../helpers/data.js';

const displayData = (dataFiveDays) => {
    // Convert UNIX time to weekday string
    const calculateData = (dataIndex) => {
        const epoch = dataFiveDays.forecast.forecastday[dataIndex].date_epoch;
        const convertData = new Date(epoch * 1000);
        const weekDay = convertData.toLocaleTimeString('en-GB', { weekday: 'short' }).slice(0, 3);
        return weekDay;
    };

    // Delete frontPage.js data
    $(config.selectors.grid).html('');
    // Current Day
    const icon = dataFiveDays.current.condition.icon;
    $(config.selectors.name).html(`<h1>${dataFiveDays.location.name}</h1>`);
    $(config.selectors.page).html(`<img src="${icon}"> ${Math.round(dataFiveDays.current.temp_c)}°`);
    $(config.selectors.type).html(`${dataFiveDays.current.condition.text}`);
    $(config.selectors.last).html(`Last Update ${dataFiveDays.current.last_updated}`);
    $(config.selectors.wind).html(`Feels like ${dataFiveDays.current.feelslike_c}° Wind ${dataFiveDays.current.wind_kph} km/h Visability ${dataFiveDays.current.vis_km} km`);
    $(config.selectors.bars).html(`Barometer ${dataFiveDays.current.pressure_mb} mb Humidity ${dataFiveDays.current.humidity}% Min Temp ${Math.round(dataFiveDays.forecast.forecastday[0].day.mintemp_c)}° Max Temp ${Math.round(dataFiveDays.forecast.forecastday[0].day.maxtemp_c)}°`);
    $(config.selectors.sun).html(`Sunrice ${dataFiveDays.forecast.forecastday[0].astro.sunrise} Sunset ${dataFiveDays.forecast.forecastday[0].astro.sunset}`);
    // Day One
    $(config.selectors.oneDate).html(calculateData(1));
    // OLD  $(config.selectors.oneDate).html(`${dataFiveDays.forecast.forecastday[1].date}`);
    $(config.selectors.oneIcon).html(`<img src="${dataFiveDays.forecast.forecastday[1].day.condition.icon}">`);
    $(config.selectors.oneTemp).html(`Min Temp ${Math.round(dataFiveDays.forecast.forecastday[1].day.mintemp_c)}° Max Temp ${Math.round(dataFiveDays.forecast.forecastday[1].day.maxtemp_c)}°`);
    $(config.selectors.oneType).html(dataFiveDays.forecast.forecastday[1].day.condition.text);
    // Day Two
    $(config.selectors.twoDate).html(calculateData(2));
    $(config.selectors.twoIcon).html(`<img src="${dataFiveDays.forecast.forecastday[2].day.condition.icon}">`);
    $(config.selectors.twoTemp).html(`Min Temp ${Math.round(dataFiveDays.forecast.forecastday[2].day.mintemp_c)}° Max Temp ${Math.round(dataFiveDays.forecast.forecastday[2].day.maxtemp_c)}°`);
    $(config.selectors.twoType).html(dataFiveDays.forecast.forecastday[2].day.condition.text);
    // Day Three
    $(config.selectors.threeDate).html(calculateData(3));
    $(config.selectors.threeIcon).html(`<img src="${dataFiveDays.forecast.forecastday[3].day.condition.icon}">`);
    $(config.selectors.threeTemp).html(`Min Temp ${Math.round(dataFiveDays.forecast.forecastday[3].day.mintemp_c)}° Max Temp ${Math.round(dataFiveDays.forecast.forecastday[3].day.maxtemp_c)}°`);
    $(config.selectors.threeType).html(dataFiveDays.forecast.forecastday[3].day.condition.text);
    // Day Four
    $(config.selectors.fourDate).html(calculateData(4));
    $(config.selectors.fourIcon).html(`<img src="${dataFiveDays.forecast.forecastday[4].day.condition.icon}">`);
    $(config.selectors.fourTemp).html(`Min Temp ${Math.round(dataFiveDays.forecast.forecastday[4].day.mintemp_c)}° Max Temp ${Math.round(dataFiveDays.forecast.forecastday[4].day.maxtemp_c)}°`);
    $(config.selectors.fourType).html(dataFiveDays.forecast.forecastday[4].day.condition.text);
    // Day Five
    $(config.selectors.fiveDate).html(calculateData(5));
    $(config.selectors.fiveIcon).html(`<img src="${dataFiveDays.forecast.forecastday[5].day.condition.icon}">`);
    $(config.selectors.fiveTemp).html(`Min Temp ${Math.round(dataFiveDays.forecast.forecastday[5].day.mintemp_c)}° Max Temp ${Math.round(dataFiveDays.forecast.forecastday[5].day.maxtemp_c)}°`);
    $(config.selectors.fiveType).html(dataFiveDays.forecast.forecastday[5].day.condition.text);
    // Add favorite button
    $(config.selectors.button).html(`<a id="button-favorite" class="btn btn-danger">Add to favorite</a>`);
    console.log(dataFiveDays);
};

// const displayThreeHours = (dataThreeHours) => {
//     console.log(dataThreeHours);
// };

const render = (cityName) => {
    data.getFiveDays(cityName).then(displayData);
};

// const renderThreeHours = (cityName) => {
//     data.getThreeHours(cityName).then(displayThreeHours);
// };

export const weatherPage = {
    render,
    // renderThreeHours,
};