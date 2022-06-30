import { React, useContext } from 'react';
import { deleteCookie } from '../../api/backRouting';
import AuthContext from '../../contexts/authContext';

const ButtonSecondary = function ButtonSecondary({ text, disabled }) {
  const { handleLogged } = useContext(AuthContext);

  const handleLogout = () => {
    deleteCookie();
    handleLogged();
  };

  return (
    <div className="w-full">
      <button
        className="w-full px-8 py-4 my-auto transition-all duration-75 ease-in-out bg-yellow-700 rounded-md text-gray-50 hover:bg-yellow-900 max-h-16"
        onClick={handleLogout}
        type="button"
      >
        {text}
      </button>
      <p
        className={
          disabled
            ? 'text-left text-gray-500 mt-3 transition-all duration-75 ease-in-out'
            : 'hidden transition-all duration-75 ease-in-out'
        }
      >
        Veuillez remplir les informations nécessaires.
      </p>
    </div>
  );
};

export default ButtonSecondary;
