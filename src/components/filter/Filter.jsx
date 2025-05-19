import "./filter.scss";

function Filter() {
  return (
    <div className="filter">
      <h1>
        Search resualts for <b>Abia State, Aba</b>
      </h1>
      <div className="top">
        <div className="item">
          <label htmlFor="city">Location</label>
          <input type="text" id="city" name="" placeholder="city Location" />
        </div>
      </div>
      <div className="bottom">
        <div className="item">
          <label htmlFor="type">Type</label>
        <select name="type" id="type">
             <option value="">any</option>
            <option value="buy">Buy</option>
            <option value="buy">Rent</option>
        </select>
         
        </div>
        <div className="item">
          <label htmlFor="property">Shop Type</label>
         <select name="property" id="property">
            <option value="">any</option>
            <option value="RetailShops">Retail Shops</option>
            <option value="ServiceBasedShops">Service-Based Shops</option>
            <option value="ProfessionalOffices(Compact Units)">Professional Offices</option>
            <option value="MultipurposeShops">Multipurpose Shops</option>
            <option value="PharmaciesorHealth Stores">Pharmacies or Health Stores</option>
            <option value="Food&Beverage">Food & Beverage</option>

         </select>
        </div>
        <div className="item">
          <label htmlFor="minPrice">Min Price</label>
          <input type="number" id="minPrice" name="minPrice" placeholder="any" />

        </div>
        <div className="item">
          <label htmlFor="maxPrice">Max Price</label>
          <input type="text" id="maxPrice" name="maxPrice" placeholder="any" />
        </div>
        <div className="item">
          <label htmlFor="unit">Shop Unit</label>
          <input type="text" id="unit" name="unit" placeholder="any" />
        </div>
        <button>
          <img src="/search.png" alt="" />
        </button>
      </div>
    </div>
  );
}

export default Filter;
