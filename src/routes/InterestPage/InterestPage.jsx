import React, { useState } from "react";
import './interestPage.scss';
import Footer from "../../components/HomePageFooter/Footer";

function InterestPage() {
  const [passport, setPassport] = useState(null);
  const [passportPreview, setPassportPreview] = useState(null);
  const [paymentProof, setPaymentProof] = useState(null);
  const [ownershipProof, setOwnershipProof] = useState(null);
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    surname: "",
    otherNames: "",
    email: "",
    businessName: "",
    phone: "",
    address: "",
    businessType: "",
    zoneOccupied: "",
    shopCount: "",
    preferredShopType: "",
    date: "",
  });

  // New states for checkboxes validation
  const [existingShopOwner, setExistingShopOwner] = useState(""); // "yes" or "no"
  const [shopTypes, setShopTypes] = useState([]); // array of selected shop types

  const shopTypeOptions = [
    "12 SQM", "15 SQM", "20 SQM", "WAREHOUSE",
    "FOOD COURT", "BANKING SPACE", "ATM GALLERY"
  ];

  const handlePassportChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPassport(file);
      setPassportPreview(URL.createObjectURL(file));
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Shop Types checkbox toggle handler
  const handleShopTypeChange = (e) => {
    const { value, checked } = e.target;
    setShopTypes((prev) => {
      if (checked) {
        return [...prev, value];
      } else {
        return prev.filter((type) => type !== value);
      }
    });
  };

  // Existing Shop Owner checkbox toggle, mutually exclusive
  const handleExistingShopOwnerChange = (e) => {
    const { value } = e.target;
    // Toggle only if clicked on different option
    setExistingShopOwner(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate required text fields
    const requiredFields = [
      "surname", "otherNames", "email", "businessName",
      "phone", "address", "businessType", "zoneOccupied",
      "shopCount", "preferredShopType", "date"
    ];

    for (const field of requiredFields) {
      if (!formData[field].trim()) {
        alert("Please fill all required fields.");
        return;
      }
    }

    if (!passport) {
      alert("Please upload your passport photograph.");
      return;
    }

    if (!paymentProof) {
      alert("Please upload proof of government payment for 2023 or 2024.");
      return;
    }

    if (!ownershipProof) {
      alert("Please upload proof or evidence of ownership for number of shops owned.");
      return;
    }

    // Validate existing shop owner selection
    if (existingShopOwner === "") {
      alert("Please indicate if you are an existing shop owner (Yes or No).");
      return;
    }

    // Validate shop types (at least one selected)
    if (shopTypes.length === 0) {
      alert("Please select at least one Shop Type/Size.");
      return;
    }

    alert("Form submitted successfully!");
    // Proceed with form submission logic here...
  };

  return (
  <>
      <div className="interest">
      <div className="interestPage position-relative">

        <div className="logo">
          <div className="first-logo"><img src="/logo.jpg" alt="" /></div>
          <h1 className="upperheader">PUBLIC-PRIVATE PARTNERSHIP</h1>
          <div className="secound-logo"><img src="/government.png" alt="" /> <h4>Government <br /> of Abia state</h4></div>
        </div>

        <div>
          <h2>REMODELED/RECONSTRUCTED SECTION OF ARIARIA INTERNATIONAL MARKET</h2>
          <h3 className="">EXPRESSION OF INTEREST FORM</h3>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="passport d-flex justify-content-center align-items-center">
            {passportPreview ? (
              <img src={passportPreview} alt="Passport Preview" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            ) : (
              <span className="text-center" style={{ fontSize: 12 }}>
                PASSPORT PHOTOGRAPH
              </span>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={handlePassportChange}
              style={{ position: "absolute", width: "120px", height: "150px", opacity: 0, cursor: "pointer" }}
            />
          </div>

          <div className="row">
            <label>
              SURNAME:
              <input type="text" name="surname" value={formData.surname} onChange={handleChange} className="form-control" />
            </label>
            <label>
              OTHER NAMES:
              <input type="text" name="otherNames" value={formData.otherNames} onChange={handleChange} className="form-control" />
            </label>
          </div>

          <div className="row">
            <label>
              EMAIL ADDRESS:
              <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control" />
            </label>
          </div>

          <div className="row">
            <label>
              TRADING/BUSINESS NAME:
              <input type="text" name="businessName" value={formData.businessName} onChange={handleChange} className="form-control" />
            </label>
            <label>
              PHONE NUMBER:
              <input type="text" name="phone" value={formData.phone} onChange={handleChange} className="form-control" />
            </label>
          </div>

          <div className="row">
            <label>
              CONTACT ADDRESS:
              <input type="text" name="address" value={formData.address} onChange={handleChange} className="form-control" />
            </label>
          </div>

          <div className="row">
            <label>
              TYPE OF BUSINESS:
              <input type="text" name="businessType" value={formData.businessType} onChange={handleChange} className="form-control" />
            </label>
          </div>

          <p><strong>(FOR EXISTING OWNERS):</strong></p>

          <div className="row">
            <label>
              Are you an existing shop owner? &nbsp;
              <input
                type="checkbox"
                name="existingShopOwner"
                value="yes"
                checked={existingShopOwner === "yes"}
                onChange={handleExistingShopOwnerChange}
              /> Yes &nbsp;
              <input
                type="checkbox"
                name="existingShopOwner"
                value="no"
                checked={existingShopOwner === "no"}
                onChange={handleExistingShopOwnerChange}
              /> No
            </label>
          </div>

          <div className="form-group">
            <label>Kindly specify zone/area presently occupied:</label>
            <input type="text" name="zoneOccupied" value={formData.zoneOccupied} onChange={handleChange} className="form-control" />
          </div>

          <div className="form-group">
            <label>If yes, kindly attach proof of ownership/receipt of last government payment for 2023 or 2024</label>
            <input
              type="file"
              className="form-control"
              onChange={(e) => setPaymentProof(e.target.files[0])}
            />
          </div>

          <p><strong>SHOP TYPES/SIZES:</strong></p>
          <div className="checkbox-group">
            {shopTypeOptions.map((label) => (
              <label key={label}>
                <input
                  type="checkbox"
                  value={label}
                  checked={shopTypes.includes(label)}
                  onChange={handleShopTypeChange}
                /> {label}
              </label>
            ))}
          </div>

          <div className="form-group">
            <label>
              Number of shops requested for purchase:
              <input type="text" name="shopCount" value={formData.shopCount} onChange={handleChange} className="form-control" />
            </label>
          </div>

          <div className="form-group">
            <label>
              Specify the type of shop/space you want:
              <input type="text" name="preferredShopType" value={formData.preferredShopType} onChange={handleChange} className="form-control" />
            </label>
          </div>

          <div className="form-group">
            <label>If you are an existing shop owner, kindly attach proof or evidence of ownership for number of shops owned.</label>
            <input
              type="file"
              className="form-control"
              onChange={(e) => setOwnershipProof(e.target.files[0])}
            />
          </div>

          <div className="note">
            <p><strong>NOTE:</strong></p>
            <ol>
              <li>Every verified original shop owner shall have the right of first refusal on allocation of shops</li>
              <li>Allocation will also be based on meeting financial obligations that will be stated on the allocation form</li>
              <li>Shop allocation will be at the discretion of the developer</li>
              <li>One expression of interest form will serve for a shop</li>
              <li>Lockup shops on floor 2 and 3 will attract a discount of 10% of the cost of shop on ground floor</li>
            </ol>
          </div>

          <label>TWO REFEREES WITH CONTACT ADDRESS(Optional)</label>

          <div className="row">
            <label>
              NAME
              <input type="text" className="form-control" />
            </label>
            <label>
              CONTACT ADDRESS:
              <input type="text" className="form-control" />
            </label>
          </div>

          <div className="row">
            <label>
              NAME
              <input type="text" className="form-control" />
            </label>
            <label>
              CONTACT ADDRESS:
              <input type="text" className="form-control" />
            </label>
          </div>

          <div className="declaration">
            <div className="declara">DECLARATION</div>
            <p>I hereby acknowledge that the information provided in this form is accurate and complete to the best of my knowledge.</p>
            <p>I understand that by submitting this form, I agree to adhere and comply by the terms and conditions of the developer and the Abia State government set forth for the purchase and occupation in the remodeled Ariaria International Market Aba</p>
          </div>

          <div className="row">
            <label>
              DATE
              <input type="date" name="date" value={formData.date} onChange={handleChange} className="form-control" />
            </label>
          </div>
          

          <button type="submit" className="btn btn-primary">Submit Form</button>
        </form>
      </div>
    </div>

    <Footer />
  </>
  );
}

export default InterestPage;
