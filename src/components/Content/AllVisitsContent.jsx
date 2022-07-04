import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LongCard from '../Cards/LongCard';
import Header from '../Header/Header';
import ActionCard from '../Cards/ActionCard';
import { allVisits } from '../../api/visits';

const AllVisitsContent = function AllVisitsContent() {
  const [list, setList] = useState([]);

  useEffect(() => {
    allVisits()
      .then((result) => {
        setList(result);
      })
      .catch(() => true);
  }, []);

  console.log(list);

  return (
    <div className="w-full p-8 md:flex md:justify-between">
      <div className="md:ml-72 md:min-w-1/2">
        <Header
          title="Vos actions"
          text="Retrouvez ici la liste de vos actions pour chaque visite"
        />

        <div className="md:mt-10">
          {list.map((item) => (
            <div className="relative" key={item.va_id}>
              <Link to={`/hives/${item.hive_id}`}>
                <ActionCard
                  title={item.label}
                  hive={item.hive_label}
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

export default AllVisitsContent;
