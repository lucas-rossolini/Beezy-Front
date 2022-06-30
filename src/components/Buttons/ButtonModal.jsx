import React from 'react';

const ButtonModal = function ButtonModal({ text, disabled, onClick }) {
  const classDisabled =
    'w-full px-8 py-4 my-auto bg-gray-300 text-gray-400 rounded-md';
  const classAbled =
    'right-0 px-4 py-2 my-auto transition-all duration-75 ease-in-out bg-yellowCard rounded-full text-4xl leading-none text-gray-800 hover:bg-gray-500 max-h-16';

  return (
    <div className="w-full">
      <button
        className={disabled ? classDisabled : classAbled}
        type="submit"
        onClick={() => onClick()}
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

export default ButtonModal;
