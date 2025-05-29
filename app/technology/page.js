'use client';

import { useState } from 'react';
import Image from 'next/image';
import './technology.css'

const technologies = [
  {
    name: "Launch vehicle",
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space.",
    imagePortrait: "/assets/technology/image-launch-vehicle-portrait.png",
    imageLandscape: "/assets/technology/image-launch-vehicle-landscape.jpg",
  },
  {
    name: "Spaceport",
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft.",
    imagePortrait: "/assets/technology/image-spaceport-portrait.png",
    imageLandscape: "/assets/technology/image-spaceport-landscape.jpg",
  },
  {
    name: "Space capsule",
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to return to Earth.",
    imagePortrait: "/assets/technology/image-space-capsule-portrait.png",
    imageLandscape: "/assets/technology/image-space-capsule-landscape.jpg",
  },
];

export default function TechnologyPage() {
  const [current, setCurrent] = useState(0);
  const tech = technologies[current];

  return (
    <main className="technology-page">
      <h3 className="section-title">
        <span className="section-number">03</span> Space launch technology
      </h3>

      <div className="technology-container">
        <div className="technology-content">
          <div className="technology-tabs">
            {technologies.map((item, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`tab-button ${index === current ? 'active' : ''}`}
                aria-label={`View details about ${item.name}`}
              >
                {index + 1}
              </button>
            ))}
          </div>

          <p className="technology-term">THE TERMINOLOGY…</p>
          <h2 className="technology-name">{tech.name}</h2>
          <p className="technology-description">{tech.description}</p>
        </div>

        <div className="technology-image">
          <picture>
            <source
              media="(min-width: 768px)"
              srcSet={tech.imagePortrait}
            />
            <img
              src={tech.imageLandscape}
              alt={tech.name}
              className="technology-img"
              loading="lazy"
            />
          </picture>
        </div>
      </div>
    </main>
  );
}
