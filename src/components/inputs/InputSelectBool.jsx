import { React, useState } from 'react';

const InputSelectBool = function InputSelectBool({
  id,
  titreLabel,
  funct,
  defaultValue,
}) {
  const [bool, setBool] = useState(defaultValue);

  funct(/true/i.test(bool));

  return (
    <label htmlFor={id} className="block">
      <span className="text-gray-700">{titreLabel}</span>
      <select
        className="w-full border border-gray-300 rounded-md"
        name="select"
        id="select"
        onChange={(e) => setBool(e.target.value)}
      >
        <option value="false">Non</option>
        <option value="true">Oui</option>
      </select>
    </label>
  );
};

export default InputSelectBool;
