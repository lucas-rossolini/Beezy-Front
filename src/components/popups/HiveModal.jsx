import React, { useEffect, useRef, useState } from 'react';
import { createHive, updateHive } from '../../api/hives';
import {
  InputText,
  InputSelectCluster,
  InputSelectState,
  InputSelectBool,
  InputNumber,
} from '../inputs';
import ButtonModalValidation from '../Buttons/ButtonModalValidation';
import clusters from '../../api/fake/clusters';

// POPUP POUR MODIFIER LES RUCHES

const HiveModal = function HiveModal({ item, bgHide }) {
  const popup = useRef();
  const { data } = item;

  const [newHive, setNewHive] = useState(data);
  const [updateConfirmation, setUpdateConfirmation] = useState(false);

  /**
   * Fonction pour mettre à jour les données de la ruche en fonction des inputs modifiés
   * @param {strign} value
   * @param {string} type
   */
  const hiveUpdate = (value, type) => {
    const newData = newHive;
    newData[type] = value;
    setNewHive(newData);
    delete newHive.last_visit_date;
  };
  /**
   * Fonction pour changer le nom de la ruche
   * @param {string} value
   */
  const handleLabel = (value) => {
    hiveUpdate(value, 'label');
  };

  /**
   * Fonction pour changer l'id du rucher
   * @param {int} value
   */
  const handleClusterId = (value) => {
    hiveUpdate(value, 'cluster_id');
  };

  /**
   * Fonction pour changer l'année de la reine'
   * @param {int} value
   */
  const handleQueenBirth = (value) => {
    hiveUpdate(value, 'queen_birth');
  };

  /**
   * Fonction pour changer le nombre de hausses
   * @param {int} value
   */
  const handleSuperNumber = (value) => {
    hiveUpdate(value, 'honey_super');
  };

  /**
   * Fonction pour changer l'état de la ruche'
   * @param {int} value
   */
  const handleBehaviour = (value) => {
    hiveUpdate(value, 'behaviour');
  };

  /**
   * Fonction pour changer l'état de la ruche'
   * @param {int} value
   */
  const handleState = (value) => {
    hiveUpdate(value, 'state');
  };

  /**
   * Fonction pour changer le risque d'essaimage
   * @param {boolean} value
   */
  const handleSwarmingRisk = (value) => {
    hiveUpdate(value, 'swarming_risk');
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
              Création d&apos;une nouvelle ruche
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
                initial=""
                titreLabel="Nom de la ruche"
                placeholder="ex. La ruche verte"
                funct={handleLabel}
                id="hiveLabel"
              />
            </div>
            <div>
              <InputSelectCluster
                titreLabel="Rucher"
                funct={handleClusterId}
                id="clusterId"
                defaultValue={0}
                clusters={clusters}
              />
            </div>
            <div>
              <InputNumber
                titreLabel="Année de la reine"
                placeholder="2020"
                funct={handleQueenBirth}
                id="queen_birth"
                defaultValue={2020}
              />
            </div>
            <div>
              <InputNumber
                defaultValue={0}
                titreLabel="Nombre de hausses"
                placeholder="ex. 1"
                funct={handleSuperNumber}
                id="honey_super"
              />
            </div>
            <div>
              <InputSelectState
                initial={data.behaviour}
                titreLabel="Comportement de la colonie"
                funct={handleBehaviour}
                id="behaviour"
                defaultValue={0}
                listItems={[
                  { id: 0, label: 'Calme' },
                  { id: 1, label: 'Bourdonneuse' },
                  { id: 2, label: 'Agressive' },
                ]}
              />
            </div>
            <div>
              <InputSelectState
                initial={data.state}
                titreLabel="État général de la ruche"
                funct={handleState}
                id="state"
                defaultValue={1}
                listItems={[
                  { id: 1, label: 'Ruche OK' },
                  { id: 2, label: 'Ruche à Surveiller' },
                  { id: 3, label: 'Ruche en danger' },
                ]}
              />
            </div>
            <div>
              <InputSelectBool
                initial={data.swarming_risk}
                titreLabel="Risque d'essaimage"
                funct={handleSwarmingRisk}
                id="swarming_risk"
                defaultValue={0}
              />
            </div>
          </div>
          <ButtonModalValidation
            text="Ajouter la ruche"
            onClick={handleNewHive}
          />
        </div>
      </div>
    );
  }
  /**
   * Fonction pour ouvrir la popup de confirmation des modifications
   * @param {*} event
   */
  // const handleConfirmUpdate = () => {
  //   setUpdateConfirmation(true);
  // };
  /**
   * Fonction pour envoyer les modifications sur le back
   */
  const handleChangeHive = async () => {
    await updateHive(newHive, data.id).catch(() => false);
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
          <div>
            <InputText
              initial={data.label}
              titreLabel="Nom de la ruche"
              placeholder="ex. La ruche verte"
              funct={handleLabel}
              id="hiveLabel"
            />
          </div>
          <div>
            <InputSelectCluster
              initial={data.cluster_id}
              titreLabel="Rucher"
              funct={handleClusterId}
              id="clusterId"
              defaultValue={data.cluster_id}
              clusters={clusters}
            />
          </div>
          <div>
            <InputNumber
              initial={data.queen_birth}
              titreLabel="Année de la reine"
              placeholder="2020"
              funct={handleQueenBirth}
              id="queen_birth"
              defaultValue={data.queen_birth}
            />
          </div>
          <div>
            <InputNumber
              initial={data.honey_super}
              titreLabel="Nombre de hausses"
              placeholder="ex. 1"
              funct={handleSuperNumber}
              id="honey_super"
              defaultValue={data.honey_super}
            />
          </div>
          <div>
            <InputSelectState
              initial={data.behaviour}
              titreLabel="Comportement de la colonie"
              funct={handleBehaviour}
              id="behaviour"
              defaultValue={data.behaviour}
              listItems={[
                { id: 0, label: 'Calme' },
                { id: 1, label: 'Bourdonneuse' },
                { id: 2, label: 'Agressive' },
              ]}
            />
          </div>
          <div>
            <InputSelectState
              initial={data.state}
              titreLabel="État général de la ruche"
              funct={handleState}
              id="state"
              defaultValue={data.state}
              listItems={[
                { id: 1, label: 'Ruche OK' },
                { id: 2, label: 'Ruche à Surveiller' },
                { id: 3, label: 'Ruche en danger' },
              ]}
            />
          </div>
          <div>
            <InputSelectBool
              initial={data.swarming_risk}
              titreLabel="Risque d'essaimage"
              funct={handleSwarmingRisk}
              id="swarming_risk"
              defaultValue={data.swarming_risk}
            />
          </div>
        </div>
        <div className="w-full h-px my-6 bg-gray-200" />

        <ButtonModalValidation
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

export default HiveModal;
