const baseUrl = 'http://api.apixu.com/v1/forecast.json?key=a5206aaa92ed4fc6a8f142223191803&q=';
// const threeDaysUrl = 'https://api.weatherbit.io/v2.0/forecast/3hourly?city=';

const getFiveDays = (cityName) => {
    return $.get(`${baseUrl}${cityName}&days=6`);
};

// const getThreeHours = (cityName) => {
//     return $.get(`${threeDaysUrl}${cityName}&key=bb577db277f345b9906d6f2758a714f4`);
// };

export const data = {
    getFiveDays,
    // getThreeHours,
};