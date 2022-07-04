import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { allActions } from '../../api/visits';
import VisitCard from '../Cards/VisitCard';
import ButtonPopoverVisit from '../Buttons/ButtonPopoverVisit';
import ButtonModal from '../Buttons/ButtonModal';
import VisitModal from '../popups/VisitModal';

// import { danger, check, magnifier, flyingBee } from '../../assets/icons';

const VisitsContent = function VisitsContent({ hive, visits }) {
  const [listActions, setListActions] = useState([]);

  useEffect(() => {
    allActions()
      .then((result) => {
        setListActions(result);
      })
      .catch(() => true);
  }, []);

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
    <div className="relative">
      <div className="absolute right-8">
        <ButtonModal text="+" disabled={false} onClick={() => showPopupNew()} />
      </div>
      <div className="w-full mt-4 md:flex md:justify-between">
        {popup.show ? (
          <VisitModal
            item={popup}
            bgHide={bgHidePopup}
            hive={hive}
            actions={listActions}
          />
        ) : null}
        {visits.length > 0 && visits[0][0] !== 'null' ? (
          <div className="md:mt-10 w-full">
            {visits.map((item) => (
              <div className="relative" key={item[0]}>
                <ButtonPopoverVisit itemId={item[0]} item={item} />
                <Link to={`/visits/${item[0]}`}>
                  <VisitCard date={item[1].date} actions={item[1].actions} />
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <div className="md:mr-12">
            Aucune visite enregistrée sur cette ruche
          </div>
        )}
      </div>
    </div>
  );
};

export default VisitsContent;
