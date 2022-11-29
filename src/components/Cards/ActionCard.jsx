import React from 'react';
import moment from 'moment';
import 'moment/locale/fr';

moment.locale('fr');

const ActionCard = function ActionCard({ title, hive }) {
  return (
    <div className="rounded-cardRadius flex mt-5 px-7 py-5 bg-purpleCard">
      <div className="pt-0 w-full flex justify-between w-">
        <div className="w-full flex flex-row-reverse justify-between">
          <div className="h-44 flex items-center justify-between">
            <div className="w-44 hidden md:block mr-8"> </div>
            {/* <ButtonPopover /> */}
          </div>
          <div className="flex flex-col">
            <h3 className="text-black text-xl">{title}</h3>
            <span className="text-xs text-lightGreyFonts pt-1">
              Action effectuée sur {hive}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActionCard;
