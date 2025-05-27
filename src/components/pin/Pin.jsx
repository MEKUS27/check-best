import { Marker, Popup } from 'react-leaflet';
import './pin.scss';
import { Link } from 'react-router-dom';

function Pin({ item }) {
  if (!item.latitude || !item.longitude) return null; // Prevent rendering if location is invalid

  return (
    <Marker position={[item.latitude, item.longitude]}>
      <Popup>
        <div className="popupContainer">
          <img src={item.images} alt={item.title} />
          <div className="textContainer">
            <Link to={`/${item.id}`}>{item.title}</Link>
            <span>{item.bedroom} bedroom</span>
            <b>₦{item.price.toLocaleString()}</b>
          </div>
        </div>
      </Popup>
    </Marker>
  );
}

export default Pin;
