import React from 'react';

const cardStyle = 'rounded-cardRadius flex mt-10 p-18 md:mt-0';

const bgColors = {
  redCard: `${cardStyle} bg-redCard`,
  greenCard: `${cardStyle} bg-greenCard`,
  purpleCard: `${cardStyle} bg-purpleCard`,
  blueCard: `${cardStyle} bg-blueCard`,
};

const SmallCard = function SmallCard({ bgColor, title, icon, count }) {
  return (
    <div className={bgColors[bgColor]}>
      <div className="pt-0 pb-4 w-full flex justify-between w-">
        <div className="w-full flex flex-row-reverse justify-between">
          <div className="w-44 h-44 flex justify-center">
            <img src={icon} alt={`${icon}-icon`} className="max-w-icon26" />
          </div>
          <div className="flex flex-col">
            <h3 className="text-black text-xl pt-8">{title}</h3>
            <span className="text-4xl pt-6">{count}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallCard;
