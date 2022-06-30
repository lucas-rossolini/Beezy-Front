import React from 'react';

import { DashboardContent, NavBar } from '../components';

const Setting = function Setting() {
  return (
    <>
      {/* <Header /> */}

      <div className="flex flex-col w-screen h-screen bg-white pb-12 md:mb-14">
        <NavBar />
        <DashboardContent />
      </div>

      {/* <Footer /> */}
    </>
  );
};

export default Setting;
