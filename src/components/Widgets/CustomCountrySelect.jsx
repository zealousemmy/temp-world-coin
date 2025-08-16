import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

const CustomCountrySelect = ({ value, onChange, label = "Select Country" }) => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef();

  useEffect(() => {
    const fetchCountries = async () => {
      const res = await axios.get(
        "https://countriesnow.space/api/v0.1/countries/flag/images"
      );
      setCountries(res.data.data);
    };
    fetchCountries();
  }, []);

  useEffect(() => {
    // Close dropdown on outside click
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelect = (countryName) => {
    onChange(countryName);
    setIsOpen(false);
    setSearch("");
  };

  return (
    <div className="mb-3 position-relative" ref={wrapperRef}>
      {label && <label className="form-label">{label}</label>}
      <button
        className="form-control d-flex justify-content-between align-items-center"
        type="button"
        onClick={() => setIsOpen(!isOpen)}>
        {value ? (
          <div className="d-flex align-items-center">
            <img
              src={countries.find((c) => c.name === value)?.flag}
              alt=""
              style={{ width: 20, marginRight: 8 }}
            />
            {value}
          </div>
        ) : (
          "Select a country"
        )}
        <span className="dropdown-toggle"></span>
      </button>

      {isOpen && (
        <div
          className="dropdown-menu show w-100 mt-1 shadow p-2"
          style={{ maxHeight: 250, overflowY: "auto", zIndex: 1000 }}>
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Search country..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {filteredCountries.length > 0 ? (
            filteredCountries.map((country) => (
              <button
                key={country.name}
                type="button"
                className="dropdown-item d-flex align-items-center"
                onClick={() => handleSelect(country.name)}>
                <img
                  src={country.flag}
                  alt={country.name}
                  style={{ width: 20, marginRight: 10 }}
                />
                {country.name}
              </button>
            ))
          ) : (
            <div className="px-2 text-muted">No countries found</div>
          )}
        </div>
      )}
    </div>
  );
};

export default CustomCountrySelect;
