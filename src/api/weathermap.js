import axios from 'axios';
//const API_KEY='00edfd80aa6ea7a6004c502c0efc56a1';

export default axios.create({
    baseURL:"https://api.openweathermap.org/data/2.5",
    
})