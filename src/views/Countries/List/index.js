import React, { useEffect } from 'react';
import '../../../styles/main.scss';
import Search from '../../../components/search';
import Card from '../../../components/cards';
import useCountries from '../../../state/countries/hooks/useCountries'

const List = () => {

  const [coutries, isLoading, setListCoutries] = useCountries();

  useEffect(() => {
    if (!coutries.list || coutries.list.length === 0) {
      setListCoutries();
    }
  }, []);


  console.log(coutries);

  return (
    <div>
      <Search />
      <div className='container'>
        {
          coutries.list && coutries.list.map((countrie, index) =>
            <Card key={index}>
              <img className='card__image' src={countrie.flag} alt={countrie.name} />
              <h5 className='card__title'>{countrie.name}</h5>
              <p className='card__description'>Population: {countrie.name}</p>
              <p className='card__description'>Region: {countrie.region}</p>
              <p className='card__description'>Capital: {countrie.capital}</p>
            </Card>
          )
        }
      </div>
    </div>  
  );
}

export default List;
