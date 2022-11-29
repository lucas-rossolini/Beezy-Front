import React from 'react';

const InputPassword = function InputPassword({
  titreLabel,
  placeholder,
  funct,
}) {
  return (
    <label htmlFor="inputPass" className="block">
      <span className="text-gray-700">{titreLabel}</span>
      <input
        autoComplete="password"
        onChange={(e) => funct(e.target.value)}
        type="password"
        placeholder={placeholder}
        className="block w-full mt-1 mb-3 bg-gray-100 border border-gray-200 rounded-md focus:border-gray-500 focus:bg-white focus:ring-0"
      />
    </label>
  );
};

export default InputPassword;
