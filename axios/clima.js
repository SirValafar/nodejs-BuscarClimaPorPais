const axios = require('axios');

const getClima = async ( lat, lon ) => {
  const respuesta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=ccacaef5166885acffbee21adabebaa7&units=metric`);
    return respuesta.data.main.temp;
}

module.exports = {
    getClima
}