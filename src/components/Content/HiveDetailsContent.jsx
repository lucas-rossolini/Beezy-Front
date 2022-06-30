import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import SummaryContent from './SummaryContent';
import VisitsContent from './VisitsContent';
// import LongCard from '../Cards/LongCard';
import Header from '../Header/Header';
import SubMenu from '../Navigation/SubMenu';

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
        setHive(result[0]);
      })
      .catch(() => true);
  }, []);

  return (
    <div className="w-full p-8 md:flex md:justify-between">
      <div className="md:ml-72 md:min-w-1/2">
        <Header title={`${hive.label}`} text="" />

        <SubMenu array={menu} id={id} />
        <div>
          <Routes>
            <Route path="/" element={<SummaryContent />} />
            <Route path="visits" element={<VisitsContent />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default HiveDetailsContent;
