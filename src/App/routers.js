import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { StateProvider } from '../state';
import { INITIAL_STATE as COUNTRIES_INITIAL_STATE } from '../state/countries/reducers';
import reducers from '../state/reducers';
import Header from '../components/header'
import List from '../views/Countries/List';
import Detail from '../views/Countries/Detail';

const Root = props => {
    const INITIAL_STATE = {
        countries: COUNTRIES_INITIAL_STATE
    }
    return (
        <StateProvider initialState={INITIAL_STATE} reducer={reducers}>
            <Router>
                <Header />
                <Route exact path='/' component={List} />
                <Route exact path='/:countryName' component={Detail} />
            </Router>
        </StateProvider >
    )
};

export default Root
