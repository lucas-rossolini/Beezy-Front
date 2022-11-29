import React from 'react';

import { HivesContent, NavBar } from '../components';

const Hives = function Hives() {
  return (
    <>
      {/* <Header /> */}

      <div className="flex flex-col w-screen h-screen bg-white pb-12 md:mb-14">
        <NavBar />
        <HivesContent />
      </div>

      {/* <Footer /> */}
    </>
  );
};

export default Hives;
