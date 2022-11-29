import { React, useState } from 'react';

const InputSelectBool = function InputSelectBool({
  id,
  titreLabel,
  funct,
  defaultValue,
  clusters,
}) {
  const [cluster, setCluster] = useState(defaultValue);

  funct(parseInt(cluster, 10));
  return (
    <label htmlFor={id} className="block">
      <span className="text-gray-700">{titreLabel}</span>
      <select
        defaultValue={cluster}
        className="w-full border border-gray-300 rounded-md"
        name="select"
        id="select"
        onChange={(e) => setCluster(e.target.value)}
      >
        {clusters
          ? clusters.map((e) => (
              <option key={e.id} value={e.id}>
                {e.label}
              </option>
            ))
          : ''}
      </select>
    </label>
  );
};

export default InputSelectBool;
