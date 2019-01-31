const axios = require('axios');

const getClima = async(lat, lng) => {
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=95878ae14fcdff49e3525d4c904d3d6d`)

    return resp.data.main.temp;
}

module.exports = {
    getClima
}
