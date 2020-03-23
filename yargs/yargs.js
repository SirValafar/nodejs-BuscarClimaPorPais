
const argv = require ('yargs').options({
    direccion:{
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el cliema',
        demanda: true
    }
  }).argv;

  module.exports = {
      argv
  }