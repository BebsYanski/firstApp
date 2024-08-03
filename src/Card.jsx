import React from 'react'
import profileImage from './assets/11.jpeg'

const Card = () => {
  return (
    <div className="card">
      <img src={profileImage} alt="profile Picture" />

      <h2>Yanski</h2>

      <p>I love programming and also love singing and music in general.</p>
    </div>
  );
}

export default Card
