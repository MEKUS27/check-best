import React, { useState } from 'react';
import './adminprofile.scss';

function Adminprofile() {
  const [profile, setProfile] = useState({
    name: 'Dr. Jude',
    email: 'dr.jude@example.com',
    phone: '08012345678',
    location: 'Aba, Nigeria',
  });

  const [editing, setEditing] = useState(false);

  const handleChange = (e) => {
    setProfile(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEditing(false);
    alert('Profile updated!');
  };

  const handleCancel = () => {
    setEditing(false);
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h2>User Profile</h2>
        {!editing && (
          <button onClick={() => setEditing(true)} className="edit-btn">Edit</button>
        )}
      </div>

      <form className="profile-form" onSubmit={handleSubmit}>
        <label>
          Full Name:
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
            disabled={!editing}
          />
        </label>
        <label>
          Email Address:
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            disabled={!editing}
          />
        </label>
        <label>
          Phone Number:
          <input
            type="text"
            name="phone"
            value={profile.phone}
            onChange={handleChange}
            disabled={!editing}
          />
        </label>
        <label>
          Location:
          <input
            type="text"
            name="location"
            value={profile.location}
            onChange={handleChange}
            disabled={!editing}
          />
        </label>

        {editing && (
          <div className="profile-actions">
            <button type="submit" className="paystack-btn">Save Changes</button>
            <button type="button" onClick={handleCancel} className="cancel-btn">Cancel</button>
          </div>
        )}
      </form>
    </div>
  );
}

export default Adminprofile;
