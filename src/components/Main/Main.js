import { useCountries } from '../../hooks/useCountries';

import CountryCard from '../Country/CountryCard';

export default function Main() {
  const countries = useCountries();

  return (
    <main>
      {countries.map((country) => (
        <CountryCard key={country.name} {...country} />
      ))}
    </main>
  );
}
