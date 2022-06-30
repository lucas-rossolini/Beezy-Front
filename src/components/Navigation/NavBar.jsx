import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { home, hive, eye, location, settings } from '../../assets/icons/index';

const NavBar = function NavBar() {
  const currentLocation = useLocation();
  const linkStyle =
    'md:flex md:flex-row md:items-center w-full h-full block py-2 px-1 mx-2 text-center border-t-4 border-white hover:bg-gray-100 md:border-l-4 md:border-t-0 md:pl-10 md:py-3 md:mt-3 md:mx-0';
  const menus = [
    { icon: home, name: 'Accueil', path: '/home' },
    { icon: hive, name: 'Ruches', path: '/hives' },
    { icon: eye, name: 'Visites', path: '/visits' },
    { icon: location, name: 'Ruchers', path: '/apiaries' },
    { icon: settings, name: 'Paramètres', path: '/settings' },
  ];
  return (
    <nav className="fixed bottom-0 inset-x-0 bg-white justify-between text-sm border-t border-gray-200 max-h-navbar md:max-w-leftNavbar md:min-h-full md:border-t-0 md:border-r md:justify-start">
      <div className="flex flex-row md:mt-32 md:flex-col">
        {menus.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={[
              linkStyle,
              currentLocation.pathname === item.path ? ' border-black' : '',
            ].join(' ')}
          >
            <div className="flex flex-col justify-center items-center black md:flex-row md:justify-start">
              <img src={item.icon} alt={item.name} className=" max-w-icon26" />
              <p className="text-xxs md:ml-6 md:text-sm">{item.name}</p>
            </div>
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
