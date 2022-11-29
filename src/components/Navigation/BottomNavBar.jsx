import React from 'react';

const BottomNavBar = function BottomNavBar() {
  const menus = [{ name: 'Déconnexion' }];

  return (
    <nav className="fixed bottom-0 inset-x-0 bg-blue-100 flex justify-between text-sm text-blue-900 uppercase font-mono">
      <div className="md:flex md:flex-col md:w-full md:h-screen max-w-md bg-white">
        <div className="w-full mx-6 my-6 text-2xl font-semibold text-black">
          <h1>Mon tableau de bord</h1>
        </div>
        <div className="flex flex-col mt-3 gap-y-2">
          {menus.map((item) => (
            <a key={item.name} href={item.path}>
              <div className="bg-yellow-700 px-5 py-4 rounded-lg mx-5 text-md font-normal text-white cursor-pointer hover:bg-yellow-900 text-center">
                {item.name}
              </div>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default BottomNavBar;
