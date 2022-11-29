import React, { useEffect, useRef, useState } from 'react';
// import { Link } from "react-router-dom";
import { createObservation, updateObservation } from '../../api/visits';
import InputDate from '../inputs/InputDate';
import InputSelectBool from '../inputs/InputSelectBool';
import InputSelectStatus from '../inputs/InputSelectState';
import ButtonPrimary from '../Buttons/ButtonPrimary';

// POPUP POUR MODIFIER LES OBSERVATIONS

const ObservationDetails = function ObservationDetails({
  item,
  bgHide,
  rucheId,
}) {
  const popup = useRef();

  const [newObservation, setNewObservation] = useState({
    date: null,
    couvain: false,
    miel: false,
    status: '',
    ruche_id: rucheId,
  });
  const [updateConfirmation, setUpdateConfirmation] = useState(false);

  /**
   * Fonction pour mettre à jour les données de l'observation en fonction des inputs modifier
   * @param {strign} value
   * @param {string} type
   */
  const observationUpdate = (value, type) => {
    const newData = newObservation;
    newData[type] = value;
    setNewObservation(newData);
  };
  /**
   * Fonction pour récupérer la valeur de l'input
   * @param {date} value
   */
  const handleDate = (value) => {
    observationUpdate(value, 'date');
  };
  /**
   * Fonction pour récupérer la valeur de l'input
   * @param {number} value
   */
  const handleCouvain = (value) => {
    observationUpdate(value, 'couvain');
  };
  /**
   * Fonction pour récupérer la valeur de l'input
   * @param {string} value
   */
  const handleMiel = (value) => {
    observationUpdate(value, 'miel');
  };
  /**
   * Fonction pour récupérer la valeur de l'input
   * @param {string} value
   */
  const handleStatus = (value) => {
    observationUpdate(value, 'status');
  };

  // const handleRucheId = (value) => {
  //   observationUpdate(value, "ruche_id");
  // };

  // fermeture de la popup au click en dehors
  useEffect(() => {
    if (!popup || !popup.current) return;
    document.addEventListener('click', (event) => {
      if (!popup || !popup.current) return;
      const selectClickInside = popup.current.contains(event.target);
      if (selectClickInside) {
        bgHide();
      }
    });
  }, [popup]);

  if (item.new) {
    const handleNewObservation = async () => {
      await createObservation(newObservation).catch(() => false);
      window.location.reload(false);
    };
    return (
      <div
        className="fixed inset-0 z-0 flex items-center justify-center py-28"
        type="button"
      >
        <div
          className="absolute inset-0 w-full h-full bg-gray-700 opacity-20"
          ref={popup}
        />
        <div className="z-10 w-full h-auto max-w-xl p-10 overflow-y-scroll bg-white border-gray-100 rounded-lg shadow-xl">
          <div className="flex flex-row justify-between">
            <div className="text-xl font-medium text-gray-800">
              Informations de l&apos;observation
            </div>
            <svg
              onClick={() => bgHide()}
              cursor="pointer"
              xmlns="http://www.w3.org/2000/svg"
              className="text-red-900 w-7 h-7"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="w-full h-px my-6 bg-gray-200" />
          <div className="grid grid-cols-2 gap-6">
            <div>
              <InputDate
                titreLabel="Date de l'observation"
                placeholder="ex. 20/01/2022"
                handleDate={handleDate}
                id="observDate"
              />
            </div>
            <div>
              <InputSelectBool
                initial={item.couvain}
                titreLabel="Cadre de couvain ?"
                funct={handleCouvain}
                id="boolCouvain"
              />
            </div>
            <div>
              <InputSelectBool
                initial={item.miel}
                titreLabel="Cadre de miel ?"
                funct={handleMiel}
                id="boolMiel"
              />
            </div>
            <div>
              <InputSelectStatus
                initial={item.miel}
                titreLabel="Status général de la ruche"
                funct={handleStatus}
                id="boolStatus"
              />
            </div>
          </div>
          <div className="w-full h-px my-6 bg-gray-200" />
          <ButtonPrimary
            text="Ajouter cette observation"
            onClick={handleNewObservation}
          />
        </div>
      </div>
    );
  }
  /**
   * Fonction pour ouvrir la popup de confirmation des modifications
   * @param {*} event
   */
  const handleConfirmUpdate = () => {
    setUpdateConfirmation(true);
  };
  /**
   * Fonction pour envoyer les modifications sur le back
   */
  const handleChangeObservation = async () => {
    await updateObservation(newObservation, item.ruche_id).catch(() => false);
    window.location.reload(false);
  };
  return (
    <div
      className="fixed inset-0 z-0 flex items-center justify-center py-28"
      type="button"
    >
      <div
        className="absolute inset-0 w-full h-full bg-gray-700 opacity-20"
        ref={popup}
      />
      <div className="z-10 w-full h-auto max-w-xl p-10 overflow-y-scroll bg-white border-gray-100 rounded-lg shadow-xl">
        <div className="flex flex-row justify-between">
          <div className="text-xl font-medium text-gray-800">
            Nouvelle observation
          </div>
          <svg
            onClick={() => bgHide()}
            cursor="pointer"
            xmlns="http://www.w3.org/2000/svg"
            className="text-red-400 w-7 h-7"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="w-full h-px my-6 bg-gray-200" />
        <div className="grid grid-cols-2 gap-6">
          <div>
            <InputDate
              titreLabel="Date de l'observation"
              placeholder="ex. 20/01/2022"
              handleDate={handleDate}
              id="startDate"
            />
          </div>
          <div>
            <InputSelectBool
              initial={item.couvain}
              titreLabel="Cadre de couvain ?"
              funct={handleCouvain}
              id="boolCouvain"
            />
          </div>
          <div>
            <InputSelectBool
              initial={item.miel}
              titreLabel="Cadre de miel ?"
              funct={handleMiel}
              id="boolMiel"
            />
          </div>
          <div>
            <InputSelectStatus
              initial={item.miel}
              titreLabel="Status général de la ruche"
              funct={handleStatus}
              id="boolMiel"
            />
          </div>
        </div>
        <div className="w-full h-px my-6 bg-gray-200" />

        <ButtonPrimary
          text="Sauvegarder les modifications"
          onClick={handleConfirmUpdate}
        />
      </div>
      {updateConfirmation ? (
        <div className="fixed z-10 inset-0 flex items-center justify-center">
          <div className="bg-gray-700 opacity-20 absolute inset-0 z-40" />
          <div className="py-8 px-14 bg-white border-gray-200 rounded-lg z-50  border-2 shadow-md text-center">
            <div className="flex justify-center items-center my-5 text-gray-600">
              <span className="ml-3 text-2xl">
                Etes-vous sûr de vouloir modifier les données de cette
                observation ?
              </span>
            </div>
            <div className="flex justify-around">
              <button
                type="button"
                className="py-2 px-8 bg-blue-600 text-blue-100 rounded-full font-medium shadow-md w-2/5"
                onClick={handleChangeObservation}
              >
                Confirmer
              </button>
              <button
                type="button"
                className="py-2 px-8 bg-red-600 text-red-100 rounded-full font-medium shadow-md w-2/5"
                onClick={() => setUpdateConfirmation(false)}
              >
                Annuler
              </button>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default ObservationDetails;
