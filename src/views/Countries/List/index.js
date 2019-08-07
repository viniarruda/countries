import React, { useEffect } from 'react';
import '../../../styles/main.scss';
import Search from '../../../components/search';
import Card from '../../../components/cards';
import useCountries from '../../../state/countries/hooks/useCountries'
import useCountriesByName from '../../../state/countries/hooks/useCountriesByName'

const List = () => {

  const [coutries, isLoading, setListCoutries] = useCountries();
  const [searchCountry, setSearchCountry] = useCountriesByName();

  useEffect(() => {
    if (!coutries.list || coutries.list.length === 0) {
      setListCoutries();
    }
  }, []);

  const search = (country) => {
    setSearchCountry(country)
  }

  return (
    <div>
      <Search search={search} />
      <div className='container'>
        {
          coutries.list && coutries.list.map((country, index) =>
            <Card key={index}>
              <img className='card__image' src={country.flag} alt={country.name} />
              <h5 className='card__title'>{country.name}</h5>
              <p className='card__description'>Population: {country.name}</p>
              <p className='card__description'>Region: {country.region}</p>
              <p className='card__description'>Capital: {country.capital}</p>
            </Card>
          )
        }
      </div>
    </div>
  );
}

export default List;
