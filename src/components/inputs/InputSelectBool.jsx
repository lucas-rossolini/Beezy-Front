import React from 'react';

const InputSelectBool = function InputSelectBool({ id, titreLabel, funct }) {
  return (
    <label htmlFor={id} className="block">
      <span className="text-gray-700">{titreLabel}</span>
      <select
        className="w-full border border-gray-300 rounded-md"
        name="select"
        id="select"
        onChange={(e) => funct(e.target.value)}
      >
        <option value="-">--</option>
        <option value={0}>Non</option>
        <option value={1}>Oui</option>
      </select>
    </label>
  );
};

export default InputSelectBool;
