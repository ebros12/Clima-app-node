const axios = require('axios');

const getClima = async(lat, lon) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=f4a4e87ecade1e33fa037a38bf9e9ebd&units=metric`)
    return resp.data.main.temp;
}

module.exports = {
    getClima
}