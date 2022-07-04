import { React, useState } from 'react';

const InputSelectState = function InputSelectState({
  id,
  titreLabel,
  funct,
  defaultValue,
  listItems,
}) {
  const [state, setState] = useState(defaultValue);

  funct(parseInt(state, 10));
  return (
    <label htmlFor={id} className="block">
      <span className="text-gray-700">{titreLabel}</span>
      <select
        defaultValue={state}
        className="w-full border border-gray-300 rounded-md"
        name="select"
        id="select"
        onChange={(e) => setState(e.target.value)}
      >
        {listItems
          ? listItems.map((e) => (
              <option key={e.id} value={e.id}>
                {e.label}
              </option>
            ))
          : ''}
      </select>
    </label>
  );
};

export default InputSelectState;
