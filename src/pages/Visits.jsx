import React from 'react';

import { AllVisitsContent, NavBar } from '../components';

const Visits = function Visits() {
  return (
    <>
      {/* <Header /> */}

      <div className="flex flex-col w-screen h-screen bg-white pb-12 md:mb-14">
        <NavBar />
        <AllVisitsContent />
      </div>

      {/* <Footer /> */}
    </>
  );
};

export default Visits;
