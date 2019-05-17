import axios from 'axios';

const instance = axios.create({
    baseURL : 'https://react-custosirak.firebaseio.com/users/'
});

export default instance;