import React from 'react';
import TableCard from '../Cards/TableCard';

const SummaryContent = function SummaryContent({ hive, clusters }) {
  return (
    <div className="w-full md:flex md:justify-between">
      <TableCard hive={hive} clusters={clusters} />
    </div>
  );
};

export default SummaryContent;
