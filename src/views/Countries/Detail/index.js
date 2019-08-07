import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../../styles/main.scss";
import useCountriesByName from "../../../state/countries/hooks/useCountriesByName";
import useCountries from "../../../state/countries/hooks/useCountries";
import { useStateValue } from "../../../state";

const Detail = ({ props, location }) => {
  const [isLoading, setListCoutries] = useCountries();
  const [searchCoutries, setSearchListCoutries] = useCountriesByName();
  const [{ countries }] = useStateValue();
  const country = countries.list ? countries.list[0] : undefined;

  useEffect(() => {
    if (!countries.list) {
      setSearchListCoutries(location.pathname.split("/")[1]);
    }
  }, []);

  return (
    <div>
      <Link to={""}>Voltar</Link>
      {countries.list && (
        <div>
          <h2>{country.name}</h2>
          <img src={country.flag} alt={country.name} />
          <p>
            <b>Native Name:</b> {country.nativeName}
          </p>
          <p>
            <b>Population:</b> {country.population}
          </p>
          <p>
            <b>Region:</b> {country.region}
          </p>
          <p>
            <b>Sub Region:</b> {country.subregion}
          </p>
          <p>
            <b>Capital:</b> {country.capital}
          </p>
          <p>
            <b>Top Level Domain:</b>{" "}
            {country.topLevelDomain.map(domain => `${domain},`)}
          </p>
          <p>
            <b>Currencies:</b>{" "}
            {country.currencies.map(currency => `${currency.name},`)}
          </p>
          <p>
            <b>Languages:</b>{" "}
            {country.languages.map(language => `${language.name},`)}
          </p>
        </div>
      )}
    </div>
  );
};

export default Detail;
