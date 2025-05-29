'use client';

import { useState } from 'react';
import Image from 'next/image';
import '../crew/crew.css'

const crewMembers = [
  {
    role: "Commander",
    name: "Douglas Hurley",
    bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut.",
    image: "/assets/crew/image-douglas-hurley.png",
  },
  {
    role: "Mission Specialist",
    name: "Mark Shuttleworth",
    bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind Ubuntu Linux.",
    image: "/assets/crew/image-mark-shuttleworth.png",
  },
  {
    role: "Pilot",
    name: "Victor Glover",
    bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station.",
    image: "/assets/crew/image-victor-glover.png",
  },
];

export default function CrewPage() {
  const [current, setCurrent] = useState(0);
  const member = crewMembers[current];

  return (
    <main className="crew-page">
      <h3 className="section-title">
        <span className="section-number">02</span> Meet your crew
      </h3>

      <div className="crew-container">
        <div className="crew-image">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="crew-img"
          />
        </div>

        <div className="crew-content">
          <div className="crew-tabs">
            {crewMembers.map((crew, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`tab-button ${index === current ? 'active' : ''}`}
                aria-label={`View ${crew.name} details`}
              />
            ))}
          </div>

          <p className="crew-role">{member.role}</p>
          <h2 className="crew-name">{member.name}</h2>
          <p className="crew-bio">{member.bio}</p>
        </div>
      </div>
    </main>
  );
}
