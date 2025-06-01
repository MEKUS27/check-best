import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./addshop.scss";
import UploadWidget from "../../components/uploadWidget/UploadWidget";
import apiRequest from "../../lib/apiRequest";
import { useNavigate } from "react-router-dom";

function Addshop() {
  const [value, setValue] = useState("");
  const [images, setImages] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (images.length === 0) {
      setError("Please upload at least one image before submitting.");
      return;
    }

    const formData = new FormData(e.target);
    const inputs = Object.fromEntries(formData);

    try {
      const res = await apiRequest.post("/posts", {
        postData: {
          title: inputs.title,
          price: parseInt(inputs.price),
          quantity: parseInt(inputs.quantity),
          city: inputs.city,
          address: inputs.address,
          tags: inputs.tags.split(",").map((tag) => tag.trim()),
          status: "active",
          latitude: inputs.latitude,
          longitude: inputs.longitude,
          type: inputs.type,
          shop: inputs.shop,
          images: images,
        },
        postDetail: {
          desc: value,
          condition: inputs.condition,
          details: inputs.details,
          category: inputs.category,
          size: parseInt(inputs.size),
          nearby: inputs.nearby.split(",").map((place) => place.trim()),
        },
      });

      // console.log("Posted successfully", res.data);
      navigate("/" + res.data.id);
      setError("");
    } catch (err) {
      console.log(err);
      setError(err.response?.data?.message || "Something went wrong.");
    }
  };

  return (
    <form className="shop-form" onSubmit={handleSubmit}>
      <h2>Add Shop</h2>

      <div className="form-grid">
        <input id="title" type="text" name="title" placeholder="Title" />
        <input id="price" type="number" name="price" placeholder="Price" />
        <input
          id="quantity"
          type="number"
          name="quantity"
          placeholder="Quantity"
        />
      </div>

      <div className="quill-wrapper">
        <ReactQuill
          theme="snow"
          onChange={setValue}
          value={value}
          placeholder="Enter detailed description..."
        />
      </div>

      <div className="image-upload-section">
        <h4>Upload Images</h4>
        <div className="image-preview">
          {images.map((image, index) => (
            <img src={image} key={index} alt={`Uploaded ${index}`} />
          ))}
        </div>

        <div className="upload-widget-button">
          <UploadWidget
            uwConfig={{
              multiple: true,
              cloudName: "vincloud2024",
              uploadPreset: "checkbest",
              folder: "shoppost",
            }}
            setState={setImages}
          />
        </div>
      </div>

      <div className="form-grid">
        <input type="text" name="city" placeholder="City" />
        <input type="text" name="address" placeholder="Address" />
        <input type="text" name="tags" placeholder="Tags (comma-separated)" />
        <input type="text" name="latitude" placeholder="Latitude" />
        <input type="text" name="longitude" placeholder="Longitude" />
        <select name="type">
          <option value="buy">Buy</option>
          <option value="rent">Rent</option>
        </select>
        <select name="shop">
          <option value="shop">Shop</option>
          <option value="warehouse">Warehouse</option>
        </select>

        <input type="text" name="condition" placeholder="Condition" />
        <input type="text" name="details" placeholder="Details" />
        <input type="text" name="category" placeholder="Category" />
        <input min={0} type="number" name="size" placeholder="Size (sqm)" />
        <input
          type="text"
          name="nearby"
          placeholder="Nearby places (comma-separated)"
        />
      </div>

      <button type="submit">Submit</button>

      {error && <div className="alert error-alert">{error}</div>}
    </form>
  );
}

export default Addshop;
