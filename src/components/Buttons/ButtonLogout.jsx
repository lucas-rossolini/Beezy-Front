import { React, useContext } from 'react';
import { deleteCookie } from '../../api/backRouting';
import { logout } from '../../api/auth';
import AuthContext from '../../contexts/authContext';

const ButtonLogout = function ButtonLogout({ text, disabled }) {
  const { handleLogged } = useContext(AuthContext);

  const handleLogout = () => {
    deleteCookie();
    logout();
    handleLogged();
  };

  return (
    <div className="w-full">
      <button
        className="w-full px-8 py-4 my-auto transition-all duration-75 ease-in-out bg-gray-700 rounded-md text-gray-50 hover:bg-gray-900 max-h-16"
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

export default ButtonLogout;
