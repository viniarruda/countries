import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../../styles/main.scss";
import Search from "../../../components/search";
import Card from "../../../components/cards";
import { useStateValue } from "../../../state";
import useCountries from "../../../state/countries/hooks/useCountries";
import useCountriesByName from "../../../state/countries/hooks/useCountriesByName";
import useCountriesByRegion from "../../../state/countries/hooks/useCountriesByRegion";
import Filter from "../../../components/filter";

const List = () => {
  const [isLoading, setListCountries] = useCountries();
  const [{ countries }] = useStateValue();
  const [searchCountry, setSearchCountry] = useCountriesByName();
  const [searchByRegion, setSearchByRegion] = useCountriesByRegion();

  useEffect(() => {
    if (!countries.list || countries.list.length === 0) {
      setListCountries();
    }
  }, []);

  const search = country => {
    country ? setSearchCountry(country) : setListCountries();
  };

  const filter = region => {
    region ? setSearchByRegion(region) : setListCountries();
  };

  return (
    <div>
      <Search search={search} />
      <Filter filter={filter} />
      <div className="container">
        {countries.list &&
          countries.list.map((country, index) => (
            <Link key={index} to={`/${country.name}`}>
              <Card>
                <img
                  className="card__image"
                  src={country.flag}
                  alt={country.name}
                />
                <h5 className="card__title">{country.name}</h5>
                <p className="card__description">Population: {country.name}</p>
                <p className="card__description">Region: {country.region}</p>
                <p className="card__description">Capital: {country.capital}</p>
              </Card>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default List;
