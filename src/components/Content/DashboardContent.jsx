import React, { useState, useEffect } from 'react';
import BigCard from '../Cards/BigCard';
import SmallCard from '../Cards/SmallCard';
import LongCard from '../Cards/LongCard';
import Header from '../Header/Header';

import { allHives, allHivesGrouped } from '../../api/hives';

import { danger, check, magnifier, flyingBee } from '../../assets/icons';

const DashboardContent = function DashboardContent() {
  const [list, setList] = useState([]);
  const [hiveGrouped, setHiveGrouped] = useState([]);

  useEffect(() => {
    allHives()
      .then((result) => {
        setList(result);
      })
      .catch(() => true);
  }, []);

  useEffect(() => {
    allHivesGrouped()
      .then((result) => {
        setHiveGrouped(result);
      })
      .catch(() => true);
  }, []);

  console.log(hiveGrouped);

  return (
    <div className="w-full p-8 md:flex md:justify-between">
      <div className="md:ml-72 md:min-w-1/2">
        <Header title="Bonjour" text=" " />
        <BigCard hivesList={list} />
        <div className="md:grid md:gap-10 md:grid-cols-2 md:grid-rows-2 md:mt-10">
          <SmallCard
            bgColor="redCard"
            title="Ruches en danger"
            icon={danger}
            count={hiveGrouped[3] || 0}
          />
          <SmallCard
            bgColor="greenCard"
            title="Ruches en santé"
            icon={check}
            count={hiveGrouped[1] || 0}
          />
          <SmallCard
            bgColor="purpleCard"
            title="Ruches à surveiller"
            icon={magnifier}
            count={hiveGrouped[2] || 0}
          />
          <SmallCard
            bgColor="blueCard"
            title="Risque d'essaimage"
            icon={flyingBee}
            count={hiveGrouped.swarm || 0}
          />
        </div>
      </div>
      <div className="md:mr-12">
        <LongCard title="Suivi des ruches" icon={check} />
      </div>
    </div>
  );
};

export default DashboardContent;
