import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
    return (
        <header>
            <h2>Where in the world</h2>
            <button>Dark Mode</button>
        </header>
    )
}

Header.propTypes = {
    children: PropTypes.element
};

export default Header;