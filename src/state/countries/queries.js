import axios from 'axios'
import { api } from '../../config/config'

export const loadCountries = () => {
    return axios.get(api)
        .then(res => res.data)
        .catch(err => err.response.data)
};

export const loadCountriesByName = (name) => {
    return axios.get(`${api}name/${name}`)
        .then(res => res.data)
        .catch(err => err.response.data)
};