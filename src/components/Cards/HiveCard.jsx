import React from 'react';
import { check, danger, magnifier } from 'src/assets/icons';

const HiveCard = function HiveCard({ title, state }) {
  const cardStyle = 'rounded-cardRadius flex mt-5 px-7 py-5';

  const bgColors = [
    `${cardStyle} bg-slate-100`,
    `${cardStyle} bg-greenCard`,
    `${cardStyle} bg-redCard`,
    `${cardStyle} bg-purpleCard`,
  ];

  const setIcon = () => {
    if (state === 1) {
      return check;
    }
    if (state === 2) {
      return danger;
    }
    if (state === 3) {
      return magnifier;
    }

    return '';
  };
  return (
    <div className={bgColors[state]}>
      <div className="pt-0 w-full flex justify-between w-">
        <div className="w-full flex flex-row-reverse justify-between">
          <div className="h-44 flex items-center justify-between">
            <div className="w-44 hidden md:block mr-8">
              <img
                src={setIcon()}
                alt={`${setIcon()}-icon`}
                className="max-w-icon26"
              />
            </div>
            {/* <ButtonPopover /> */}
          </div>
          <div className="flex flex-col">
            <h3 className="text-black text-xl">{title}</h3>
            <span className="text-xs text-lightGreyFonts pt-1">
              Dernière visite le 21 février 2022
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HiveCard;
