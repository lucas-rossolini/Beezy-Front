import { React, useState } from 'react';

const InputSelectBool = function InputSelectBool({
  id,
  titreLabel,
  funct,
  defaultValue,
}) {
  const [cluster, setCluster] = useState(defaultValue);

  funct(parseInt(cluster, 10));
  return (
    <label htmlFor={id} className="block">
      <span className="text-gray-700">{titreLabel}</span>
      <select
        className="w-full border border-gray-300 rounded-md"
        name="select"
        id="select"
        onChange={(e) => setCluster(e.target.value)}
      >
        <option value={0}>--</option>
        <option value={1}>Alençon</option>
        <option value={2}>Neuilly</option>
        <option value={3}>Condé</option>
      </select>
    </label>
  );
};

export default InputSelectBool;
