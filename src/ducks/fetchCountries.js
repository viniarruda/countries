import Immutable from 'immutee';
import { api, INITIAL_STATE } from './../../config/config';

export const FETCH_APP_COUNTRIES = 'FETCH_APP_COUNTRIES';
export const FETCH_APP_COUNTRIES_FAILURE = 'FETCH_APPPONTUACAO_FAILURE';

export default (state = INITIAL_STATE, action) => {
    const immutable = Immutable(state);
    switch (action.type) {
        case FETCH_APP_COUNTRIES: {
            return immutable
                .set('result', action.payload)
                .set('fetched', true)
                .set('error', null)
                .done();
        }
        case FETCH_APP_COUNTRIES_FAILURE: {
            return immutable
                .set('error', action.payload)
                .set('result', [])
                .set('fetched', false)
                .done();
        }
        default: {
            return state;
        }
    }
}

export function fetchGetAllCountries() {
    return (dispatch) => {
        return fetch((`${api}/`)
            .then(res => res.json())
            .then(res => dispatch({
                type: FETCH_APP_COUNTRIES,
                payload: res.data
            }))
            .catch(err => dispatch({
                type: FETCH_APP_COUNTRIES_FAILURE,
                payload: err.response
            }));
    }
}