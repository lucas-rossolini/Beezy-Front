import React, { useState, useEffect } from 'react';
// import { Link } from "react-router-dom";
import BigCard from '../Cards/BigCard';
import SmallCard from '../Cards/SmallCard';
import LongCard from '../Cards/LongCard';
import Header from '../Header/Header';

// import HiveDetails from '../popups/HiveDetails';
import { allHives } from '../../api/hives';

import { danger, check, magnifier, flyingBee } from '../../assets/icons';

const DashboardContent = function DashboardContent() {
  const [list, setList] = useState([]);

  // const [popup, setPopup] = useState({
  //   data: null,
  //   show: false,
  //   new: false,
  // });

  useEffect(() => {
    allHives()
      .then((result) => {
        setList(result);
      })
      .catch(() => true);
  }, []);

  // const showPopupNew = () => {
  //   setPopup({
  //     data: {},
  //     show: true,
  //     new: true,
  //   });
  // };

  // console.log(showPopupNew);

  // const bgHidePopup = () => {
  //   setPopup({
  //     data: null,
  //     show: false,
  //   });
  // };

  return (
    <div className="w-full p-8 md:flex md:justify-between">
      {/* {popup.show ? <HiveDetails item={popup} bgHide={bgHidePopup} /> : null} */}
      <div className="md:ml-72 md:min-w-1/2">
        <Header title="Bonjour Pascal" text=" " />
        <BigCard hivesList={list} />
        <div className="md:grid md:gap-10 md:grid-cols-2 md:grid-rows-2 md:mt-10">
          <SmallCard bgColor="redCard" title="Ruches en danger" icon={danger} />
          <SmallCard bgColor="greenCard" title="Ruches en santé" icon={check} />
          <SmallCard
            bgColor="purpleCard"
            title="Ruches à surveiller"
            icon={magnifier}
          />
          <SmallCard
            bgColor="blueCard"
            title="Risque d'essaimage"
            icon={flyingBee}
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
