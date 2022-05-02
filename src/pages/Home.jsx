import React from 'react';

import { DashboardContent, NavBar } from '../components';

const Home = function Home() {
  return (
    <>
      {/* <Header /> */}

      <div className="flex flex-col w-screen h-screen bg-white">
        <NavBar />
        <DashboardContent />
      </div>

      {/* <Footer /> */}
    </>
  );
};

export default Home;
