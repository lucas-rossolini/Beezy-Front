import React from 'react';

import { DashboardContent, NavBar } from '../components';

const Visits = function Visits() {
  return (
    <>
      {/* <Header /> */}

      <div className="flex flex-col w-screen h-screen bg-white pb-12 md:mb-14">
        VISITES !
        <NavBar />
        <DashboardContent />
      </div>

      {/* <Footer /> */}
    </>
  );
};

export default Visits;
