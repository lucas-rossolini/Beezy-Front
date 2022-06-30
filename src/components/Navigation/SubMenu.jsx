import React from 'react';
import { Link } from 'react-router-dom';

const SubMenu = function SubMenu({ array, id }) {
  return (
    <div className="flex text-2xl justify-around mt-5">
      {array.map((item) => (
        <Link key={item.name} to={`/hives/${id}${item.path}`} className="">
          <div className="flex items-center min-h-8">
            <img src={item.icon} alt={item.name} className=" max-w-icon20" />
            <span className="mx-1">{item.name}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SubMenu;
