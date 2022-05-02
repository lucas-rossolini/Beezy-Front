import React from 'react';
import { home, hive, eye, location, settings } from '../../assets/icons/index';

const NavBar = function NavBar() {
  const menus = [
    { icon: home, name: 'Accueil' },
    { icon: hive, name: 'Ruches' },
    { icon: eye, name: 'Visites' },
    { icon: location, name: 'Ruchers' },
    { icon: settings, name: 'Paramètres' },
  ];

  return (
    <nav className="fixed bottom-0 inset-x-0 bg-white justify-between text-sm border-t border-gray-200 max-h-navbar md:max-w-leftNavbar md:min-h-full md:border-t-0 md:border-r md:justify-start">
      <div className="flex flex-row md:mt-32 md:flex-col">
        {menus.map((item) => (
          <a
            key={item.name}
            href={item.path}
            className="w-full block py-2 px-3 text-center border-t-4 border-white hover:border-gray-500 active:border-black md:border-l-4 md:border-t-0 md:pl-10 md:pt-6 "
          >
            <div className="flex flex-col justify-center items-center black md:flex-row md:justify-start">
              <img src={item.icon} alt={item.name} className=" max-w-icon26" />
              <p className="text-xxs md:ml-6 md:text-sm">{item.name}</p>
            </div>
          </a>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
