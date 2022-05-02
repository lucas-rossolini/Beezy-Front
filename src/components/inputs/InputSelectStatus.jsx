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
        <option value="OK">Ruche ok</option>
        <option value="SURVEILLER">Ruche à surveiller</option>
        <option value="DANGER">Ruche en danger</option>
      </select>
    </label>
  );
};

export default InputSelectBool;
