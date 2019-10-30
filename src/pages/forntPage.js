import { config } from '../helpers/config.js';
import { data } from '../helpers/data.js';

const sofiaData = (dataFiveDays) => {
    const icon = dataFiveDays.current.condition.icon;
    $(config.selectors.sName).html(`<h1>${dataFiveDays.location.name}</h1>`);
    $(config.selectors.sIcon).html(`<img src="${icon}"> ${Math.round(dataFiveDays.current.temp_c)}°`);
    $(config.selectors.sTemp).html(`Min Temp ${Math.round(dataFiveDays.forecast.forecastday[0].day.mintemp_c)}° Max Temp ${Math.round(dataFiveDays.forecast.forecastday[0].day.maxtemp_c)}°`);
    // $(config.selectors.fSofia).html(`<a id="full-sofia" class="btn btn-dark">Пълна прогноза</a>`);
};

const plovdivData = (dataFiveDays) => {
    const icon = dataFiveDays.current.condition.icon;
    $(config.selectors.pName).html(`<h1>${dataFiveDays.location.name}</h1>`);
    $(config.selectors.pIcon).html(`<img src="${icon}"> ${Math.round(dataFiveDays.current.temp_c)}°`);
    $(config.selectors.pTemp).html(`Min Temp ${Math.round(dataFiveDays.forecast.forecastday[0].day.mintemp_c)}° Max Temp ${Math.round(dataFiveDays.forecast.forecastday[0].day.maxtemp_c)}°`);
};

const varnaData = (dataFiveDays) => {
    const icon = dataFiveDays.current.condition.icon;
    $(config.selectors.vName).html(`<h1>${dataFiveDays.location.name}</h1>`);
    $(config.selectors.vIcon).html(`<img src="${icon}"> ${Math.round(dataFiveDays.current.temp_c)}°`);
    $(config.selectors.vTemp).html(`Min Temp ${Math.round(dataFiveDays.forecast.forecastday[0].day.mintemp_c)}° Max Temp ${Math.round(dataFiveDays.forecast.forecastday[0].day.maxtemp_c)}°`);
};

const londonData = (dataFiveDays) => {
    const icon = dataFiveDays.current.condition.icon;
    $(config.selectors.lName).html(`<h1>${dataFiveDays.location.name}</h1>`);
    $(config.selectors.lIcon).html(`<img src="${icon}"> ${Math.round(dataFiveDays.current.temp_c)}°`);
    $(config.selectors.lTemp).html(`Min Temp ${Math.round(dataFiveDays.forecast.forecastday[0].day.mintemp_c)}° Max Temp ${Math.round(dataFiveDays.forecast.forecastday[0].day.maxtemp_c)}°`);
};

const puntaCanaData = (dataFiveDays) => {
    const icon = dataFiveDays.current.condition.icon;
    $(config.selectors.pcName).html(`<h1>${dataFiveDays.location.name}</h1>`);
    $(config.selectors.pcIcon).html(`<img src="${icon}"> ${Math.round(dataFiveDays.current.temp_c)}°`);
    $(config.selectors.pcTemp).html(`Min Temp ${Math.round(dataFiveDays.forecast.forecastday[0].day.mintemp_c)}° Max Temp ${Math.round(dataFiveDays.forecast.forecastday[0].day.maxtemp_c)}°`);
};

const renderSofia = () => {
    data.getFiveDays('Sofia').then(sofiaData);
};

const renderPlovdiv = () => {
    data.getFiveDays('Plovdiv').then(plovdivData);
};

const renderVarna = () => {
    data.getFiveDays('Varna').then(varnaData);
};

const renderLondon = () => {
    data.getFiveDays('London').then(londonData);
};

const renderPuntaCana = () => {
    data.getFiveDays('Punta Cana').then(puntaCanaData);
};
export const frontPage = {
    renderSofia,
    renderPlovdiv,
    renderVarna,
    renderLondon,
    renderPuntaCana,
};