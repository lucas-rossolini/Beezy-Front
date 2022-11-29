import { React, useState } from 'react';

const InputSelectBool = function InputSelectBool({
  id,
  titreLabel,
  funct,
  defaultValue,
}) {
  const [bool, setBool] = useState(defaultValue);

  funct(parseInt(bool, 10), id);

  return (
    <label htmlFor={id} className="block">
      <span className="text-gray-700">{titreLabel}</span>
      <select
        defaultValue={defaultValue}
        className="w-full border border-gray-300 rounded-md"
        name="select"
        id="select"
        onChange={(e) => setBool(e.target.value)}
      >
        <option value={0}>Non</option>
        <option value={1}>Oui</option>
      </select>
    </label>
  );
};

export default InputSelectBool;
