import "./addshop.scss";

function Addshop() {
  return (
    <>
      {/* <h2>Add New Shop</h2> */}

      <div className="container my-5">
        <div className="card shadow">
          <div className="card-header bg-primary text-white">
            <h5 className="mb-0">Upload a Shop</h5>
          </div>
          <div className="card-body">
            <form>
              <div className="row g-3">
                <div className="col-md-6">
                  <label htmlFor="shopName" className="form-label">
                    Shop Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="shopName"
                    name="shopName"
                  />
                </div>

                <div className="col-md-6">
                  <label htmlFor="price" className="form-label">
                    Price
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="price"
                    name="price"
                  />
                </div>

                <div className="col-12">
                  <label htmlFor="address" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    name="address"
                  />
                </div>

                <div className="col-md-6">
                  <label htmlFor="city" className="form-label">
                    City
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="city"
                    name="city"
                  />
                </div>

                <div className="col-md-6">
                  <label htmlFor="floorSpace" className="form-label">
                    Floor Space (sqft)
                  </label>
                  <input
                    type="number"
                    min={1}
                    className="form-control"
                    id="floorSpace"
                    name="floorSpace"
                  />
                </div>

                <div className="col-md-6">
                  <label htmlFor="businessType" className="form-label">
                    Shop Type
                  </label>
                  <select
                    className="form-select"
                    id="businessType"
                    name="businessType"
                  >
                    <option value="retail">Retail</option>
                    <option value="office">Office</option>
                    <option value="warehouse">Warehouse</option>
                    <option value="food">Food / Restaurant</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="col-md-6">
                  <label htmlFor="latitude" className="form-label">
                    Latitude
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="latitude"
                    name="latitude"
                  />
                </div>

                <div className="col-md-6">
                  <label htmlFor="longitude" className="form-label">
                    Longitude
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="longitude"
                    name="longitude"
                  />
                </div>

                <div className="col-md-6">
                  <label htmlFor="parking" className="form-label">
                    Nearby Parking
                  </label>
                  <select className="form-select" id="parking" name="parking">
                    <option value="yes">Available</option>
                    <option value="no">Not Available</option>
                  </select>
                </div>

                <div className="col-md-6">
                  <label htmlFor="electricity" className="form-label">
                    Electricity Supply
                  </label>
                  <select
                    className="form-select"
                    id="electricity"
                    name="electricity"
                  >
                    <option value="available">Available</option>
                    <option value="not-available">Not Available</option>
                  </select>
                </div>

                <div className="col-md-6">
                  <label htmlFor="water" className="form-label">
                    Water Supply
                  </label>
                  <select className="form-select" id="water" name="water">
                    <option value="available">Available</option>
                    <option value="not-available">Not Available</option>
                  </select>
                </div>

                <div className="col-md-6">
                  <label htmlFor="license" className="form-label">
                    Shop License
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="license"
                    name="license"
                  />
                </div>

                <div className="col-md-6">
                  <label htmlFor="availability" className="form-label">
                    Availability Date
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="availability"
                    name="availability"
                  />
                </div>

                <div className="col-12">
                  <label htmlFor="desc" className="form-label">
                    Description
                  </label>
                  <textarea
                    className="form-control"
                    id="desc"
                    name="desc"
                    rows="3"
                  ></textarea>
                </div>
              </div>

              <div className="mt-4 text-end">
                <button type="submit" className="btn btn-success">
                  Add Shop
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Addshop;
