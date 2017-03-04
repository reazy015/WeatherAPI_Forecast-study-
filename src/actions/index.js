import axios from 'axios';

const API_KEY = '689560104dee07aea102639c2e5bb48c';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATER = 'FETCH_WEATER';

export function fetchWeather(city){
	const url =`${ROOT_URL}&q=${city},us`;
	const request = axios.get(url);


	return{
		type: FETCH_WEATER,
		payload: request
	};
}
