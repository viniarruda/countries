import countriesReducer from './countries/reducers';

export default ({ coutries }, action) => ({
    countries: countriesReducer(coutries, action),
});