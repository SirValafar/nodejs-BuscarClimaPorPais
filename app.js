const lugar = require('./axios');
const informacion = require('./yargs');

let inf = informacion.argv;

const getInfo = async ( lugarD ) => {

  try{
    const coordenada = await lugar.getLugar(lugarD);
    const temperadura = await lugar.getClima(coordenada.lat, coordenada.lng);
    return `El clima de ${coordenada.direccion} es de ${temperadura} `;
  } catch (e) {
    return `No se encontro el clima ${lugarD}`
  }
}


getInfo(inf.direccion)
  .then(console.log)
  .catch(console.log);