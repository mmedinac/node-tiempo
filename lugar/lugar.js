const axios = require('axios');

const getLugarLatlng = async (direccion) => {

        let encodeUrl = encodeURI( direccion );

        let res = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}&key=AIzaSyDyJPPlnIMOLp20Ef1LlTong8rYdTnaTXM`)

        if( res.data.status === 'ZERO_RESULTS' ) {
            throw new Error(`No hay resultados para la cuidad ${direccion}`);
        }

            let location = res.data.results[0];
            let coors = location.geometry.location;
     
    return{
        direccion: location.formatted_address,
        latitud: coors.lat,
        longitud: coors.lng
    }
}

module.exports = {
    getLugarLatlng
}


