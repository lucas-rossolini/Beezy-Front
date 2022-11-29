import React from 'react';

const ButtonPrimary = function ButtonPrimary({ text, disabled }) {
  const classDisabled =
    'w-full px-8 py-4 my-auto bg-gray-300 text-gray-400 rounded-md';
  const classAbled =
    'w-full px-8 py-4 my-auto transition-all duration-75 ease-in-out bg-yellow-700 rounded-md text-gray-50 hover:bg-yellow-900 max-h-16';

  return (
    <div className="w-full">
      <button
        className={disabled ? classDisabled : classAbled}
        type="submit"
        // onClick={() => onClick()}
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

export default ButtonPrimary;
