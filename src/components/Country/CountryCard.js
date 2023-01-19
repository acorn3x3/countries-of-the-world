import React from 'react';

export default function CountryCard({ name, iso2, iso3, local_name, continent }) {
  return (
    <div>
      <div className="country-card">
        <div className="details">
          <div className="name">{name}</div>
          <div className="iso2">{iso2}</div>
          <div className="iso3">{iso3}</div>
          <div className="local_name">{local_name}</div>
          <div className="continent">{continent}</div>
        </div>
      </div>
    </div>
  );
}
