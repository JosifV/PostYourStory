import axios from 'axios';

const instance = axios.create({
    baseURL: "https://poststoryess.firebaseio.com/"
})
export default instance;