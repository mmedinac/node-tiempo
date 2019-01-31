const lugar = require('./lugar/lugar');
const clima = require('./Clima/clima');


const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la cuidad para obtener el clima',
        demand: true
    }
}).argv;

let getInfo = async () => {


    try {
        
        let coors = await lugar.getLugarLatlng(argv.direccion);
        let temp = await clima.getClima(coors.latitud, coors.longitud);
    
        return `El clima en ${coors.direccion} es de ${temp}`;

    } catch (e) {
        return `No se pudo determinar el clima en ${ direccion }`;
    }

   
}

getInfo(argv.direccion)
    .then( mensaje => console.log(mensaje))
    .catch(e => console.log(e));

/*lugar.getLugarLatlng(argv.direccion)
    .then(res => {
        console.log(res);
    })
    .catch(e => console.log(e));


clima.getClima(-33.4488897, -70.6692655)
    .then( temp => console.log(temp))
    .catch( e => console.log(e));*/
