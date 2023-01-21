import React from 'react';
import { useCountries } from '../../hooks/useCountries';
import CountryCard from '../Country/CountryCard';

export default function Main() {
  const countries = useCountries();
  const [continent, setContinent] = React.useState('all');
  const continents = [...new Set(countries.map(({ continent }) => continent))];
  const filtered = countries.filter(
    (country) => country.continent === continent || continent === 'all'
  );

  return (
    <main>
      <div>
        <select onChange={(e) => setContinent(e.target.value)}>
          <option value="all">All</option>
          {continents.map((continent) => (
            <option key={continent} value={continent}>
              {continent}
            </option>
          ))}
        </select>
      </div>
      <br></br>
      <br></br>

      <div className="card-container">
        {filtered.map((country) => (
          <CountryCard key={country.name} {...country} />
        ))}
      </div>
    </main>
  );
}
