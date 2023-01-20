import { useCountries } from '../../hooks/useCountries';
import CountryCard from '../Country/CountryCard';

export default function Main() {
  const countries = useCountries();

  return (
    <main>
      <div className="card-container">
        {countries.map((country) => (
          <CountryCard key={country.name} {...country} />
        ))}
      </div>
    </main>
  );
}
