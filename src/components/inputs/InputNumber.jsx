import React from 'react';

const InputNumber = function InputNumber({
  id,
  defaultValue,
  titreLabel,
  placeholder,
  funct,
}) {
  return (
    <label htmlFor={id} className="block">
      <span className="text-gray-700">{titreLabel}</span>
      <input
        id={id}
        defaultValue={defaultValue}
        min={0}
        onChange={(e) => funct(parseInt(e.target.value, 10))}
        type="number"
        placeholder={placeholder}
        className="block w-full mt-1 mb-3 bg-gray-100 border border-gray-200 rounded-md focus:border-gray-500 focus:bg-white focus:ring-0"
      />
    </label>
  );
};

export default InputNumber;
