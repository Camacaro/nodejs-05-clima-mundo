const axios = require('axios');

const getLugarLatLng = async (direccion) => {

	let encodeUrl = encodeURI(direccion);

	let myKey = 'AIzaSyA9lrgt4-X0MA23zIe8dFGFLHgWwDdGeP8';

	let url_google = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}&key=${myKey}`;

	let resp = await axios.get( url_google );

	if (resp.data.status === 'ZERO_RESULTS') {
		throw new Error(`No hay resultado para la ciudad ${direccion}`);
	} 

	let location = respuesta.data.results[0];
	let coors = location.geometry.location;

	return {
		direccion: location.formatted_address,
		lat: coors.lat,
		lng: coors.lng
	}
}

module.exports = {
	getLugarLatLng
}