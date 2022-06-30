import React from 'react';
import TableCard from '../Cards/TableCard';

const SummaryContent = function SummaryContent() {
  return (
    <div className="w-full md:flex md:justify-between">
      <div className=" md:min-w-1/2">
        <div className="md:grid md:gap-10 md:grid-cols-2 md:grid-rows-2 md:mt-10">
          <TableCard />
        </div>
      </div>
    </div>
  );
};

export default SummaryContent;
