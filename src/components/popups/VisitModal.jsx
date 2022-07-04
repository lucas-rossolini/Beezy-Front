import React, { useEffect, useRef, useState } from 'react';
import { createVisit, updateVisit } from '../../api/visits';
import { InputText, InputSelectBool } from '../inputs';
import ButtonModal from '../Buttons/ButtonModal';

// POPUP POUR MODIFIER LES RUCHES

const VisitModal = function VisitModal({ item, bgHide, hive, actions }) {
  const popup = useRef();
  const { data } = item;

  const [newVisit, setNewVisit] = useState(data);
  const [updateConfirmation, setUpdateConfirmation] = useState(false);

  /**
   * Fonction pour mettre à jour les données de la ruche en fonction des inputs modifiés
   * @param {strign} value
   * @param {string} type
   */
  const visitUpdate = (value, type) => {
    const newData = newVisit;
    newData[type] = value;
    setNewVisit(newData);
  };
  /**
   * Fonction pour changer le nom de la ruche
   * @param {string} value
   */
  const handleHiveId = (value) => {
    visitUpdate(value, 'hive_id');
  };

  /**
   * Fonction pour changer le risque d'essaimage
   * @param {boolean} value
   */
  const handleAction = (value, actionId) => {
    if (value === 0) return;

    if (!data.actions) {
      data.actions = {};
    }

    data.actions[actionId] = value;
    visitUpdate(value, data.actions);
  };

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
    const handleNewVisit = async () => {
      handleHiveId(hive.id);
      await createVisit(newVisit).catch(() => false);
      window.location.reload(false);
    };
    return (
      <div
        className="fixed inset-0 z-10 flex items-center justify-center py-28"
        type="button"
      >
        <div
          className="absolute inset-0 w-full h-full bg-gray-700 opacity-20"
          ref={popup}
        />
        <div className="z-10 w-full h-auto max-w-xl p-10 overflow-y-scroll bg-white border-gray-100 rounded-lg shadow-xl">
          <div className="flex flex-row justify-between">
            <div className="text-xl font-medium text-gray-800">
              Création d&apos;une nouvelle visite sur {hive.label}
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
          <div className="grid grid-cols-1 gap-6">
            <div className="hidden">
              <InputText
                initial={hive.id}
                titreLabel="identifiant de la ruche"
                placeholder="ex. 0"
                funct={handleHiveId}
                id="hive_id"
              />
            </div>
            {actions.map((action) => (
              <div key={action.id}>
                <InputSelectBool
                  initial={0}
                  titreLabel={action.label}
                  funct={handleAction}
                  id={action.id}
                  defaultValue={0}
                />
              </div>
            ))}
          </div>
          <ButtonModal text="Ajouter la visite" onClick={handleNewVisit} />
        </div>
      </div>
    );
  }
  /**
   * Fonction pour envoyer les modifications sur le back
   */
  const handleChangeHive = async () => {
    await updateVisit(newVisit, data.id).catch(() => false);
    window.location.reload(false);
  };
  return (
    <div
      className="fixed inset-0 z-10 flex items-center justify-center py-28"
      type="button"
    >
      <div
        className="absolute inset-0 w-full h-full bg-gray-700 opacity-20"
        ref={popup}
      />
      <div className="z-10 w-full h-auto max-w-xl p-10 overflow-y-scroll bg-white border-gray-100 rounded-lg shadow-xl">
        <div className="flex flex-row justify-between">
          <div className="text-xl font-medium text-gray-800">
            Informations de la ruche
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
        <div className="grid grid-cols-1 gap-6">
          <div className="hidden">
            <InputText
              initial={hive.id}
              titreLabel="identifiant de la ruche"
              placeholder="ex. 0"
              funct={handleHiveId}
              id="hive_id"
            />
          </div>
          <div>
            <InputSelectBool
              initial={data.swarming_risk}
              titreLabel="Risque d'essaimage"
              funct={handleAction}
              id="swarming_risk"
              defaultValue={data.swarming_risk}
            />
          </div>
        </div>
        <div className="w-full h-px my-6 bg-gray-200" />

        <ButtonModal
          text="Sauvegarder les modifications"
          onClick={handleChangeHive}
        />

        {/* <Link to={`/reset-password/${data.hive_id}`}>
          <button className="mx-auto mt-10 text-center underline" type="button">
            Changer le mot de passe du magasin
          </button>
        </Link> */}
      </div>
      {updateConfirmation ? (
        <div className="fixed z-10 inset-0 flex items-center justify-center">
          <div className="bg-gray-700 opacity-20 absolute inset-0 z-40" />
          <div className="py-8 px-14 bg-white border-gray-200 rounded-lg z-50  border-2 shadow-md text-center">
            <div className="flex justify-center items-center my-5 text-gray-600">
              <span className="ml-3 text-2xl">
                Etes-vous sûr de vouloir modifier les données de cette ruche ?
              </span>
            </div>
            <div className="flex justify-around">
              <button
                type="button"
                className="py-2 px-8 bg-blue-600 text-blue-100 rounded-full font-medium shadow-md w-2/5"
                onClick={handleChangeHive}
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

export default VisitModal;
