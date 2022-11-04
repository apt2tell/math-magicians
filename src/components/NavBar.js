import React from 'react';
import { Link } from 'react-router-dom';

// Create NavBar function
const NavBar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home |',
    },
    {
      id: 2,
      path: '/Calculator',
      text: 'Calculator |',
    },
    {
      id: 3,
      path: '/Quotes',
      text: 'Quotes',
    },
  ];

  return (
    <nav className="nav-bar">
      <h2>Math Magicians</h2>
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <Link to={link.path}>
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
