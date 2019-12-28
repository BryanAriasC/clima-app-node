const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=481c3a1f109cbd05afbf315a4cce589e&units=metric`)
    return resp.data.main.temp;
}


module.exports = {
    getClima
}