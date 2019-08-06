import axios from 'axios'
import { api } from '../../config/config'

export const loadCountries = () => {
    return axios.get(api)
        .then(res => res.data)
        .catch(err => err.response.data)
};