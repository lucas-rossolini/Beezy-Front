import React from 'react';

const TableCard = function TableCard({ hive, clusters }) {
  const behaviours = [
    { id: 0, label: 'Calme' },
    { id: 1, label: 'Bourdonneuse' },
    { id: 2, label: 'Agressive' },
  ];

  console.log(hive);
  return (
    <div className="rounded-cardRadius flex bg-purpleCard w-full mt-10 p-18 md:mt-12">
      <div className="pt-4 pb-4 w-full flex-col justify-between md:px-8">
        {clusters[hive.cluster_id] ? (
          <div className="flex justify-between w-full border-b pb-3 mb-3">
            <span>Rucher : </span>
            <span className="w-1/2">{clusters[hive.cluster_id].label}</span>
          </div>
        ) : (
          ''
        )}
        {hive.queen_birth ? (
          <div className="flex justify-between w-full border-b pb-3 mb-3">
            <span>Reine : </span>
            <span className="w-1/2">{hive.queen_birth}</span>
          </div>
        ) : (
          ''
        )}
        {hive.honey_super != null ? (
          <div className="flex justify-between w-full border-b pb-3 mb-3">
            <span>Hausses : </span>
            <span className="w-1/2">{hive.honey_super}</span>
          </div>
        ) : (
          ''
        )}
        {hive.behaviour ? (
          <div className="flex justify-between w-full border-b pb-3 mb-3">
            <span>Comportement : </span>
            <span className="w-1/2">{behaviours[hive.behaviour].label}</span>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default TableCard;
