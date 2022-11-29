import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import SummaryContent from './SummaryContent';
import VisitsContent from './VisitsContent';
// import LongCard from '../Cards/LongCard';
import Header from '../Header/Header';
import SubMenu from '../Navigation/SubMenu';
import clusters from '../../api/fake/clusters';

import { oneHive } from '../../api/hives';

import { summary, eye } from '../../assets/icons/index';

const HiveDetailsContent = function HiveDetailsContent({ id }) {
  const [hive, setHive] = useState([]);
  const menu = [
    { icon: summary, name: 'Résumé', path: '' },
    { icon: eye, name: 'Visites', path: '/visits' },
  ];

  useEffect(() => {
    oneHive(id)
      .then((result) => {
        setHive(result);
      })
      .catch(() => true);
  }, []);

  let visits = [];

  if (hive.visits) {
    visits = Object.entries(hive.visits);
  }

  return (
    <div className="w-full p-8 md:flex md:justify-between">
      <div className="md:ml-72 md:min-w-1/2">
        <Header title={`${hive.label}`} text="" />

        <SubMenu array={menu} id={id} />
        <div>
          <Routes>
            <Route
              path="/"
              element={<SummaryContent hive={hive} clusters={clusters} />}
            />
            <Route
              path="visits"
              element={<VisitsContent hive={hive} visits={visits} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default HiveDetailsContent;
