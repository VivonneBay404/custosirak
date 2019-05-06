import axios from 'axios';

const instance = axios.create({
    baseURL : 'https://react-custosirak.firebaseio.com/orders/'
});

export default instance;