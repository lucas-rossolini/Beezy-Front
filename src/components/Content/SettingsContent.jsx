import React from 'react';
import Header from '../Header/Header';
import ButtonLogout from '../Buttons/ButtonLogout';

const SettingsContent = function SettingsContent() {
  return (
    <div className="w-full p-8 md:flex md:justify-between">
      <div className="md:ml-72 md:min-w-1/2">
        <Header title="Paramètres du compte" text=" " />
        <div className="mt-10 p-18 md:mt-12 w-1/2">
          <ButtonLogout text="Se déconnecter" />
        </div>
      </div>
      {/* <div className="md:mr-12">
        <LongCard title="Suivi des ruches" icon={check} />
      </div> */}
    </div>
  );
};

export default SettingsContent;
