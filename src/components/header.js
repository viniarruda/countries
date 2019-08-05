import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>Header</div>
        )
    }
}

Header.propTypes = {
    children: PropTypes.element
};

export default hot(module)(Header);