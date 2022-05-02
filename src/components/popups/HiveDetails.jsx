import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { createHive, updateHive } from '../../api/hives';
import InputText from '../inputs/InputText';
import ButtonPrimary from '../Buttons/ButtonPrimary';

// POPUP POUR MODIFIER LES MAGASINS

const MagDetails = function MagDetails({ item, bgHide }) {
  const popup = useRef();
  const { data } = item;

  const [newHive, setNewHive] = useState(data);
  const [updateConfirmation, setUpdateConfirmation] = useState(false);

  /**
   * Fonction pour mettre à jour les données du magasin en fonction des inputs modifier
   * @param {strign} value
   * @param {string} type
   */
  const hiveUpdate = (value, type) => {
    const newData = newHive;
    newData[type] = value;
    setNewHive(newData);
  };
  /**
   * Fonction pour changer le nom
   * @param {string} value
   */
  const handleNom = (value) => {
    hiveUpdate(value, 'name');
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
    const handleNewHive = async () => {
      await createHive(newHive).catch(() => false);
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
              Nom de la ruche
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
            <div>
              <InputText
                initial={data.name}
                titreLabel="Nom"
                placeholder="ex. La ruche verte"
                funct={handleNom}
                id="hiveNom"
              />
            </div>
          </div>
          <div className="w-full h-px my-6 bg-gray-200" />
          <ButtonPrimary text="Ajouter la ruche" onClick={handleNewHive} />
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
  const handleChangeMag = async () => {
    await updateHive(newHive, data.hive_id).catch(() => false);
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
            Informations du magasin
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
        <div className="w-full h-px my-6 bg-gray-200" />

        <ButtonPrimary
          text="Sauvegarder les modifications"
          onClick={handleConfirmUpdate}
        />

        <Link to={`/reset-password/${data.hive_id}`}>
          <button className="mx-auto mt-10 text-center underline" type="button">
            Changer le mot de passe du magasin
          </button>
        </Link>
      </div>
      {updateConfirmation ? (
        <div className="fixed z-10 inset-0 flex items-center justify-center">
          <div className="bg-gray-700 opacity-20 absolute inset-0 z-40" />
          <div className="py-8 px-14 bg-white border-gray-200 rounded-lg z-50  border-2 shadow-md text-center">
            <div className="flex justify-center items-center my-5 text-gray-600">
              <span className="ml-3 text-2xl">
                Etes-vous sûr de vouloir modifier les données de ce magasin ?
              </span>
            </div>
            <div className="flex justify-around">
              <button
                type="button"
                className="py-2 px-8 bg-blue-600 text-blue-100 rounded-full font-medium shadow-md w-2/5"
                onClick={handleChangeMag}
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

export default MagDetails;
