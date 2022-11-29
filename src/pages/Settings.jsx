import React from 'react';

import { SettingsContent, NavBar } from '../components';

const Settings = function Settings() {
  return (
    <>
      {/* <Header /> */}

      <div className="flex flex-col w-screen h-screen bg-white pb-12 md:mb-14">
        <NavBar />
        <SettingsContent />
      </div>

      {/* <Footer /> */}
    </>
  );
};

export default Settings;
