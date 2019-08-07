import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/main.scss';
import Search from '../../../components/search';
import Card from '../../../components/cards';
import useCountries from '../../../state/countries/hooks/useCountries'
import useCountriesByName from '../../../state/countries/hooks/useCountriesByName'
import useCountriesByRegion from '../../../state/countries/hooks/useCountriesByRegion'
import Filter from '../../../components/filter';


const List = () => {

  const [coutries, isLoading, setListCoutries] = useCountries();
  const [searchCountry, setSearchCountry] = useCountriesByName();
  const [searchByRegion, setSearchByRegion] = useCountriesByRegion();

  useEffect(() => {
    if (!coutries.list || coutries.list.length === 0) {
      setListCoutries();
    }
  }, []);

  const search = (country) => {
    country
      ? setSearchCountry(country)
      : setListCoutries();
  }

  const filter = (region) => {
    region
      ? setSearchByRegion(region)
      : setListCoutries();
  }

  return (
    <div>
      <Search search={search} />
      <Filter filter={filter} />
      <div className='container'>
        {
          coutries.list && coutries.list.map((country, index) =>
            <Link key={index} to={`/${country.name}`}>
              <Card >
                <img className='card__image' src={country.flag} alt={country.name} />
                <h5 className='card__title'>{country.name}</h5>
                <p className='card__description'>Population: {country.name}</p>
                <p className='card__description'>Region: {country.region}</p>
                <p className='card__description'>Capital: {country.capital}</p>
              </Card>
            </Link>
          )
        }
      </div>
    </div>
  );
}

export default List;
