/* eslint-disable react/jsx-props-no-spreading */
import { Menu, Transition } from '@headlessui/react';
// eslint-disable-next-line no-unused-vars
import { React, Fragment, useEffect, useRef, useState } from 'react';
// import { useParams } from 'react-router-dom';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { dots } from '../../assets/icons/index';
import { deleteHive } from '../../api/hives';

export default function ButtonPopover({ rucheId }) {
  const handleDelete = async () => {
    await deleteHive(rucheId).catch(() => true);
    window.location.reload(false);
  };

  return (
    <div className="absolute right-5 top-6 text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="z-20 inline-flex w-full justify-center rounded-md  px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <img src={dots} alt="dots-icon" className="max-w-icon26" />
            <ChevronDownIcon
              className="ml-2 -mr-1 h-5 w-5 text-white-50 hover:text-white-100"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute z-50 right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="button"
                    className={`${
                      active ? 'bg-yellowCard text-black' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <EditActiveIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    ) : (
                      <EditInactiveIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    )}
                    Modifier
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="button"
                    className={`${
                      active ? 'bg-yellowCard text-black' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    onClick={() => handleDelete(rucheId)}
                  >
                    {active ? (
                      <DeleteActiveIcon
                        className="mr-2 h-5 w-5 text-violet-400"
                        aria-hidden="true"
                      />
                    ) : (
                      <DeleteInactiveIcon
                        className="mr-2 h-5 w-5 text-violet-400"
                        aria-hidden="true"
                      />
                    )}
                    Supprimer
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}

function EditInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill="#EDE9FE"
        stroke="#000000"
        strokeWidth="2"
      />
    </svg>
  );
}

function EditActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill="#FFF7D9"
        stroke="#000000"
        strokeWidth="2"
      />
    </svg>
  );
}

function DeleteInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="6"
        width="10"
        height="10"
        fill="#EDE9FE"
        stroke="#000000"
        strokeWidth="2"
      />
      <path d="M3 6H17" stroke="#000000" strokeWidth="2" />
      <path d="M8 6V4H12V6" stroke="#000000" strokeWidth="2" />
    </svg>
  );
}

function DeleteActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="6"
        width="10"
        height="10"
        fill="#FFF7D9"
        stroke="#000000"
        strokeWidth="2"
      />
      <path d="M3 6H17" stroke="#000000" strokeWidth="2" />
      <path d="M8 6V4H12V6" stroke="#000000" strokeWidth="2" />
    </svg>
  );
}
