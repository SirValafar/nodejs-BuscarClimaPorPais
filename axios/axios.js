const axios = require('axios');

const getLugar = async ( pais ) => {
  
  const direccion = encodeURI(pais);

  const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${direccion}`,
    headers: {'x-rapidapi-key': 'da50a6b204msh9086aaf79a5b33ap158546jsn3b1eb44d9cab'}
  });

  const resp = await instance.get();

  if (resp.data.Results.length === 0) {
      throw new Error(`No hay resultado para ${direccion}.`)
  } 
  const data  = resp.data.Results[0];
  const lugar = data.name;
  const lat   = data.lat;
  const lng   = data.lon;

  return {
    lugar,
    lat,
    lng
  }
}

module.exports = {
  getLugar
}