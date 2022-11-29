import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LongCard from '../Cards/LongCard';
import Header from '../Header/Header';
import HiveCard from '../Cards/HiveCard';
import { allHives } from '../../api/hives';
import ButtonPopover from '../Buttons/ButtonPopover';

const HivesContent = function HivesContent() {
  const [list, setList] = useState([]);

  useEffect(() => {
    allHives()
      .then((result) => {
        setList(result);
      })
      .catch(() => true);
  }, []);

  return (
    <div className="w-full p-8 md:flex md:justify-between">
      <div className="md:ml-72 md:min-w-1/2">
        <Header
          title="Vos ruches"
          text="Retrouvez ici la liste de vos ruches enregistrées"
          button
          modal="hive"
        />

        <div className="md:mt-10">
          {list.map((item) => (
            <div className="relative" key={item.id}>
              <ButtonPopover itemId={item.id} item={item} />
              <Link to={`/hives/${item.id}`}>
                <HiveCard
                  title={item.label}
                  state={item.state}
                  lastVisit={item.last_visit_date}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="md:mr-12">
        <LongCard title="Suivi des ruches" />
      </div>
    </div>
  );
};

export default HivesContent;
