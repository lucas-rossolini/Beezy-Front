import React from 'react';
import { hive, upper, location } from '../../assets/icons/index';

const BigCard = function BigCard({ hivesList }) {
  let totalUppers = 0;
  hivesList.forEach((element) => {
    totalUppers += element.honey_super;
  });
  return (
    <div className="rounded-cardRadius flex bg-yellowCard mt-10 p-18 md:mt-12">
      <div className="pt-4 pb-12 w-full flex justify-between md:px-8">
        <div className="flex flex-col justify-center items-center">
          <div className="bg-greyIcons rounded-full w-44 h-44 flex justify-center">
            <img src={hive} alt="hive-icon" className="max-w-icon26" />
          </div>
          <h3 className="text-greyFonts text-sm pt-6">Ruches</h3>
          <span className="text-5xl">{hivesList.length}</span>
        </div>

        <div className="flex flex-col justify-center items-center">
          <div className="bg-greyIcons rounded-full w-44 h-44 flex justify-center">
            <img src={upper} alt="hive-icon" className="max-w-icon26" />
          </div>
          <h3 className="text-greyFonts text-sm pt-6">Hausses</h3>
          <span className="text-5xl">{totalUppers}</span>
        </div>

        <div className="flex flex-col justify-center items-center">
          <div className="bg-greyIcons rounded-full w-44 h-44 flex justify-center">
            <img src={location} alt="hive-icon" className="max-w-icon26" />
          </div>
          <h3 className="text-greyFonts text-sm pt-6">Ruchers</h3>
          <span className="text-5xl">3</span>
        </div>
      </div>
    </div>
  );
};

export default BigCard;
