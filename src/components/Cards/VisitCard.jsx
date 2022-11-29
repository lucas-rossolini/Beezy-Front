import React from 'react';
import moment from 'moment';
import 'moment/locale/fr';

moment.locale('fr');

const VisitCard = function VisitCard({ date, actions }) {
  let actionsArray = [];

  if (actions) {
    actionsArray = Object.entries(actions);
  }
  return (
    <div className="rounded-cardRadius flex mt-5 px-7 py-5 bg-purpleCard w-full">
      <div className="pt-0 w-full flex justify-between w-">
        <div className="w-full flex flex-row-reverse justify-between">
          <div className="h-44 flex items-center justify-between">
            <div className="w-44 hidden md:block mr-8"> </div>
          </div>
          <div className="flex flex-col">
            <h3 className="text-black text-xl">
              Visite du {moment(date).format('LL')}
            </h3>
            <span className="text-xs text-lightGreyFonts pt-1">
              {actionsArray.length > 0 && actionsArray.length <= 3
                ? actionsArray.map((action) => (
                    <span
                      key={action[0]}
                      className="rounded-cardRadius p-2 mr-4 mt-2 bg-greenCard"
                    >
                      {action[1].label}
                    </span>
                  ))
                : 'Aucune action pour le moment'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisitCard;
