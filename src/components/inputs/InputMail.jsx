import React from 'react';

const InputMail = function InputMail({
  id,
  titreLabel,
  placeholder,
  funct,
  initial,
}) {
  return (
    <label htmlFor={id} className="block">
      <span className="text-gray-700">{titreLabel}</span>
      <input
        id={id}
        defaultValue={initial}
        autoComplete="email"
        onChange={(e) => funct(e.target.value)}
        type="email"
        placeholder={placeholder}
        className="block w-full mt-1 mb-3 bg-gray-100 border border-gray-200 rounded-md focus:border-gray-500 focus:bg-white focus:ring-0"
      />
    </label>
  );
};

export default InputMail;
