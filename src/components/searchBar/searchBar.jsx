import React, { useState, useRef, useEffect } from "react";
import './searchBar.scss';
import { Link } from "react-router-dom";

const propertyOptions = [
  // "Rent Shop",
  "Buy Shop",
  // "Rent Office Space",
  // "Buy Office Space",
  // "Rent Warehouse",
  // "Buy Warehouse",
];

const shopTypeOptions = [
  "Shop Type",
  "12 SQM",
  "16 SQM",
  "20 SQM",
  "60 SQM",
  "35 SQM",
  "50 SQM",
  "2 SQM",
];


function SearchBar() {
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState(propertyOptions[0]);
  const [shopType, setShopType] = useState(shopTypeOptions[0]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const [openProperty, setOpenProperty] = useState(false);
  const [openShopType, setOpenShopType] = useState(false);

  const propertyRef = useRef(null);
  const shopTypeRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (propertyRef.current && !propertyRef.current.contains(event.target)) {
        setOpenProperty(false);
      }
      if (shopTypeRef.current && !shopTypeRef.current.contains(event.target)) {
        setOpenShopType(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Searching:", { propertyType, location, shopType, minPrice, maxPrice });
  };

  return (
    <div className="search-container">
    <form onSubmit={handleSubmit} className="search-form">

      {/* Property Type */}
      <div className="form-group" ref={propertyRef}>
        {/* <label>I’m looking to...</label> */}
        <div
          className="custom-select"
          onClick={() => setOpenProperty(prev => !prev)}
          tabIndex={0}
        >
          {propertyType}
          <span className={`arrow ${openProperty ? "open" : ""}`}>&#9662;</span>
        </div>
        {openProperty && (
          <ul className="options-list">
            {propertyOptions.map((option) => (
              <li
                key={option}
                className={option === propertyType ? "selected" : ""}
                onClick={() => {
                  setPropertyType(option);
                  setOpenProperty(false);
                }}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Shop Type */}
      <div className="form-group" ref={shopTypeRef}>
        {/* <label>Shop Type</label> */}
        <div
          className="custom-select"
          onClick={() => setOpenShopType(prev => !prev)}
          tabIndex={0}
        >
          {shopType}
          <span className={`arrow ${openShopType ? "open" : ""}`}>&#9662;</span>
        </div>
        {openShopType && (
          <ul className="options-list">
            {shopTypeOptions.map((option) => (
              <li
                key={option}
                className={option === shopType ? "selected" : ""}
                onClick={() => {
                  setShopType(option);
                  setOpenShopType(false);
                }}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Location */}
      <div className="form-group">
        {/* <label>Location</label> */}
        <input
          type="text"
          className="form-control"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter location"
        />
      </div>

      {/* Min Price */}
      <div className="form-group">
        {/* <label>Min Price (₦)</label> */}
        <input
          type="number"
          className="form-control"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          placeholder="Min Price (₦)"
        />
      </div>

      {/* Max Price */}
      <div className="form-group">
        {/* <label>Max Price (₦)</label> */}
        <input
          type="number"
          className="form-control"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          placeholder="Max Price (₦)"
        />
      </div>

      <Link to="/list">
      <button type="submit" className="search-button">
        Search
      </button>
      </Link>
    </form>
  </div>
  );
}

export default SearchBar;
