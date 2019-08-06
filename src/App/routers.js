import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { StateProvider } from '../state';
import { INITIAL_STATE as COUNTRIES_INITIAL_STATE } from '../state/countries/reducers';
import reducers from '../state/reducers';
import Header from '../components/header'
import List from '../views/Countries/List';

const Root = props => {
    const INITIAL_STATE = {
        countries: COUNTRIES_INITIAL_STATE
    }
    return (
        <StateProvider initialState={INITIAL_STATE} reducer={reducers}>
            <Router>
                <>
                    <Header />
                    <Switch>
                        <Route exact path='/' component={List} />
                    </Switch>
                </>
            </Router>
        </StateProvider >
    )
};

export default Root
