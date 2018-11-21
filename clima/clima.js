const axios = require('axios');

const getClima = async (lat, lng) => {

	let myKey = 'c254c1e55a6f8e2dc817e16e8bd22c48';

	let tipoMedida = 'metric';//centigrado

	let url_weather = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=${tipoMedida}&appid=${myKey}`;

	let resp = await axios.get( url_weather );

	return resp.data.main.temp;
}

module.exports = {
	getClima
}