'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Destination', href: '/destination' },
  { name: 'Crew', href: '/crew' },
  { name: 'Technology', href: '/technology' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="navbar">
      <div className="logo">
        <img src="/assets/shared/logo.svg" alt="Logo" />
      </div>

      <div className="line" />

      {/* Hamburger button */}
      <button className="hamburger" onClick={toggleMenu}>
        <span className={menuOpen ? 'bar open' : 'bar'} />
        <span className={menuOpen ? 'bar open' : 'bar'} />
        <span className={menuOpen ? 'bar open' : 'bar'} />
      </button>

      <nav className="nav-links">
        {navItems.map((item, index) => (
          <Link
            key={item.name}
            href={item.href}
            className={`nav-item ${pathname === item.href ? 'active' : ''}`}
          >
            <span className="nav-index">0{index}</span> {item.name}
          </Link>
        ))}
      </nav>

      {/* Mobile navigation */}
      {menuOpen && (
        <div className="mobile-nav">
          {navItems.map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              className={`nav-item ${pathname === item.href ? 'active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              <span className="nav-index">0{index}</span> {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
