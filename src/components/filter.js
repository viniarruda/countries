import React, { useState } from 'react';

const Filter = ({ filter }) => {

    const [filterValue, setFilterhValue] = useState('');

    const handlerFilter = e => {
        filter(e.target.value);
        setFilterhValue(e.target.value);
    }

    return (
        <select value={filterValue} onChange={handlerFilter}>
            <option value='' selected>Filter by Region</option>
            <option value='Africa' >Africa</option>
            <option value='Americas' >Americas</option>
            <option value='Asia' >Asia</option>
            <option value='Europe' >Europe</option>
            <option value='Oceania' >Oceania</option>
        </select>
    )
}

export default Filter;