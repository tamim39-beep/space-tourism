'use client';

import { useState } from 'react';
import Image from 'next/image';
import '../destination/destination.css'

const destinations = [
  {
    name: "Moon",
    description:
      "See our planet’s closest celestial neighbor. A perfect relaxing trip full of history and science.",
    image: "/assets/destination/image-moon.png",
    distance: "384,400 km",
    travel: "3 days",
  },
  {
    name: "Mars",
    description:
      "Don’t forget to pack hiking boots. Mars offers rugged terrain and stunning red landscapes.",
    image: "/assets/destination/image-mars.png",
    distance: "225 mil. km",
    travel: "9 months",
  },
  {
    name: "Europa",
    description:
      "A moon with subsurface oceans and icy plains. Great for adventurous souls.",
    image: "/assets/destination/image-europa.png",
    distance: "628 mil. km",
    travel: "6 years",
  },
  {
    name: "Titan",
    description:
      "Saturn’s largest moon offers thick atmosphere and mysterious methane lakes.",
    image: "/assets/destination/image-titan.png",
    distance: "1.6 bil. km",
    travel: "7 years",
  },
];

export default function DestinationPage() {
  const [current, setCurrent] = useState(0);
  const planet = destinations[current];

  return (
    <main className="destination-page">
      <h3 className="section-title">
        <span className="section-number">01</span> Pick your destination
      </h3>

      <div className="destination-container">
        <div className="destination-image">
          <Image
            src={planet.image}
            alt={planet.name}
            fill
            className="planet-img"
          />
        </div>

        <div className="destination-content">
          <div className="destination-tabs">
            {destinations.map((dest, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`tab-button ${index === current ? 'active' : ''}`}
              >
                {dest.name}
              </button>
            ))}
          </div>

          <h2 className="planet-name">{planet.name}</h2>
          <p className="planet-description">{planet.description}</p>

          <hr className="divider" />

          <div className="destination-stats">
            <div className="stat">
              <p className="stat-label">Avg. Distance</p>
              <p className="stat-value">{planet.distance}</p>
            </div>
            <div className="stat">
              <p className="stat-label">Est. Travel Time</p>
              <p className="stat-value">{planet.travel}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
