import { React, useState } from 'react';

const InputSelectState = function InputSelectState({
  id,
  titreLabel,
  funct,
  defaultValue,
}) {
  const [state, setState] = useState(defaultValue);

  funct(parseInt(state, 10));
  return (
    <label htmlFor={id} className="block">
      <span className="text-gray-700">{titreLabel}</span>
      <select
        className="w-full border border-gray-300 rounded-md"
        name="select"
        id="select"
        onChange={(e) => setState(e.target.value)}
      >
        <option value={1}>Ruche ok</option>
        <option value={2}>Ruche à surveiller</option>
        <option value={3}>Ruche en danger</option>
      </select>
    </label>
  );
};

export default InputSelectState;
