import axios from 'axios';

const instance = axios.create({
    baseURL : 'https://react-custosirak.firebaseio.com/signUp/'
});

export default instance;