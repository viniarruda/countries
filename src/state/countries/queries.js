import axios from 'axios'
import { api } from '../../config/config'

export const loadCountries = () => {
    return axios.get(api)
        .then(res => res.data)
        .catch(err => err.response.data)
};

export const loadCountriesByName = (country) => {
    return axios.get(`${api}name/${country}`)
        .then(res => res.data)
        .catch(err => err.response.data)
};

export const loadCountriesByRegion = (region) => {
    return axios.get(`${api}region/${region}`)
        .then(res => res.data)
        .catch(err => err.response.data)
};