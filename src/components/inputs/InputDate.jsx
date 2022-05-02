import React from 'react';
import moment from 'moment';

const InputDate = function InputDate({
  id,
  titreLabel,
  placeholder,
  handleDate,
}) {
  return (
    <label htmlFor={id} className="block">
      <span className="text-brick">{titreLabel}</span>
      <input
        id={id}
        defaultValue=""
        min={0}
        onChange={(e) =>
          handleDate(`${e.target.value} ${moment().format('hh:mm:ss')}`)
        }
        type="date"
        placeholder={placeholder}
        className="block w-full mt-1 mb-3 bg-gray-100 border border-gray-200 rounded-md focus:border-gray-500 focus:bg-white focus:ring-0"
      />
    </label>
  );
};

export default InputDate;
