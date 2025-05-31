import "./filter.scss";
// import { FaFilter } from "react-icons/fa";
import { LuFilter } from "react-icons/lu";


function Filter() {
  return (
    <div className="advanced-filter bg-white p-4">
      <div className="d-flex align-items-center mb-3">
        <LuFilter className="me-2 text-muted" />
        <h5 className="mb-0">Advanced Filter Options</h5>
      </div>

      <form className="row g-3">
        <div className="col-12">
          <label className="form-label">Location</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter a state, locality or area"
          />
        </div>

        <div className="col-12">
          <label className="form-label">Category</label>
          <select className="form-select">
            <option>For Sale</option>
            <option>For Rent</option>
          </select>
        </div>

        <div className="col-md-6">
          <label className="form-label">Type</label>
          <select className="form-select">
            <option>All Types</option>
            <option>Shop</option>
            <option>Warehouse</option>
            {/* <option>Retail</option>
            <option>Office</option> */}
          </select>
        </div>

        <div className="col-md-6">
          <label className="form-label">Shop Sizes</label>
          <select className="form-select">
            <option>Any Size</option>
            <option>2 SQM</option>
            <option>12 SQM</option>
            <option>16 SQM</option>
            <option>20 SQM</option>
            <option>35 SQM</option>
            <option>50 SQM</option>
            <option>60 SQM</option>
          </select>
        </div>

        <div className="col-md-6">
          <label className="form-label">Min price</label>
          <select className="form-select">
            <option>Any Price</option>
            <option>₦ 2, 000,000</option>
            <option>₦ 4, 000,000</option>
            <option>₦ 8, 000,000</option>

          </select>
        </div>

        <div className="col-md-6">
          <label className="form-label">Max price</label>
          <select className="form-select">
            <option>Any Price</option>
            <option>₦ 14, 000,000</option>
            <option>₦ 22, 000, 000</option>
            <option>₦ 40, 000, 000+</option>
            {/* <option>₦800,000+</option> */}


          </select>
        </div>

        <div className="col-md-6">
          <label className="form-label">Furnishing</label>
          <select className="form-select">
            <option>Any</option>
            <option>Furnished</option>
            <option>Unfurnished</option>
          </select>
        </div>

        <div className="col-md-6">
          <label className="form-label">Servicing</label>
          <select className="form-select">
            <option>Any</option>
            <option>Serviced</option>
            <option>Not Serviced</option>
          </select>
        </div>

        <div className="col-12">
          <button className="btn btn-primary w-100 mt-2">Search</button>
        </div>
      </form>
    </div>
  );
}

export default Filter;
