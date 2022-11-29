import { React, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { oneHive } from '../api/hives';
import { NavBar, HiveDetailsContent } from '../components';

const HiveDetails = function HiveDetails() {
  const [hive, setHive] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    oneHive(id)
      .then((result) => {
        setHive(result);
      })
      .catch(() => true);
  }, []);

  return (
    <>
      {/* <Header /> */}

      <div className="flex flex-col w-screen h-screen bg-white pb-12 md:mb-14">
        <NavBar />
        <HiveDetailsContent id={id} hive={hive} />
      </div>

      {/* <Footer /> */}
    </>
  );
};

export default HiveDetails;
