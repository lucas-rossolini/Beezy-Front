import { React, useState } from 'react';
import ButtonModal from '../Buttons/ButtonModal';
import HiveModal from '../popups/HiveModal';

// import ButtonSecondary from '../Buttons/ButtonSecondary';

const Header = function Header({ title, text, button }) {
  const [popup, setPopup] = useState({
    data: null,
    show: false,
    new: false,
  });

  const showPopupNew = () => {
    setPopup({
      data: {},
      show: true,
      new: true,
    });
  };

  const bgHidePopup = () => {
    setPopup({
      data: null,
      show: false,
    });
  };
  return (
    <div className="flex justify-between items-center">
      <div>
        <h1 className="text-4xl font-medium">{title}</h1>
        <p className="w-full mt-2 text-gray-700">{text}</p>
      </div>
      {button ? (
        <div className="md:mr-10">
          <ButtonModal
            text="+"
            disabled={false}
            onClick={() => showPopupNew()}
          />
        </div>
      ) : (
        ''
      )}
      {popup.show ? <HiveModal item={popup} bgHide={bgHidePopup} /> : null}

      {/* <ButtonSecondary text="Déco" /> */}
    </div>
  );
};

export default Header;
