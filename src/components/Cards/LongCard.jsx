import React from 'react';
import { upper, bug, forkKnife, division } from 'src/assets/icons';

const categories = [
  { name: 'Hausses à poser', icon: upper },
  { name: 'Traitement à prévoir', icon: bug },
  { name: 'Nourissement à prévoir', icon: forkKnife },
  { name: 'Division à prévoir', icon: division },
];

const LongCard = function LongCard({ title }) {
  return (
    <div className="rounded-cardRadius flex bg-black mt-10 p-18 mb-12 md:w-1/4 md:right-0 md:mt-0 md:mb-0">
      <div className="pt-0 pb-4 w-full flex justify-between">
        <div className="flex flex-col">
          <h3 className="text-white text-2xl pt-8 pl-10">{title}</h3>
          <div className="flex-col pl-6 pt-8">
            {categories.map((item) => (
              <div className="flex items-center pb-10">
                <div className="bg-lightGreyIcons rounded-full w-44 h-44 flex justify-center">
                  <img
                    src={item.icon}
                    alt="hive-icon"
                    className="max-w-icon26"
                  />
                </div>
                <div>
                  <h4 className="text-white text-lg pl-2">{item.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LongCard;
