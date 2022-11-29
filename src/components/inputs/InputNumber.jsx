import { React, useState } from 'react';

const InputNumber = function InputNumber({
  id,
  defaultValue,
  titreLabel,
  placeholder,
  funct,
}) {
  const [num, setNum] = useState(defaultValue);

  funct(parseInt(num, 10));
  return (
    <label htmlFor={id} className="block">
      <span className="text-gray-700">{titreLabel}</span>
      <input
        id={id}
        defaultValue={defaultValue}
        min={0}
        onChange={(e) => setNum(e.target.value)}
        type="number"
        placeholder={placeholder}
        className="block w-full mt-1 mb-3 bg-gray-100 border border-gray-200 rounded-md focus:border-gray-500 focus:bg-white focus:ring-0"
      />
    </label>
  );
};

export default InputNumber;
