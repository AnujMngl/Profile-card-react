import React from 'react';
import './ProfileCard.css'; // or use Tailwind if preferred

const ProfileCard = () => {
  return (
    <div className="profile-card">
      <img
        src="src\image.png"
        alt="Profile"
        className="profile-img"
      />
      <h2 className="profile-name">Anuj Mangal</h2>
      <p className="profile-role">Full Stack Developer</p>
      <button className="profile-btn">Add to Cart</button>
    </div>
  );
};

export default ProfileCard;