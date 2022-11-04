import React from 'react';
import { Link } from 'react-router-dom';

const navBar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home |',
    },
    {
      id: 2,
      path: '/calculator',
      text: 'Calculator |',
    },
    {
      id: 3,
      path: '/quotes',
      text: 'Quotes',
    },
  ];

  return (
    <nav className="nav-bar">
      <h1>Math Magicians</h1>
      <ul>
        {' '}
        {links.map((link) => (
          <li key={link.id}>
            <Link
              to={link.path}
            >
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default navBar;
