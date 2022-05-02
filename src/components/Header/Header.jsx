import React from 'react';

const Header = function Header({ title, text }) {
  return (
    <div className="md:ml-72 md:mt-32">
      <h1 className="text-4xl font-medium">{title}</h1>
      <p className="w-full mt-2 text-gray-700 xl:w-3/5">{text}</p>
    </div>
  );
};

export default Header;
