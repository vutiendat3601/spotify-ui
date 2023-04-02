import axios from 'axios';
import configs from '../configs/configs';

const storeRequest = axios.create({
    baseURL: `http://${configs.storeHost}/api`,
});

export default storeRequest;
