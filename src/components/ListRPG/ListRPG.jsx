import React, { useState, useEffect } from 'react';
import RPGService from '../../services/RPGService';

export default function ListRPG() {
  const [dataRPG, setDataRPG] = useState([]);
  useEffect(() => {
    RPGService.getRPG()
      .then((response) => {
        setDataRPG(response.data);
      })
      .catch((error) => {
        console.error('Error fetching RPG list:', error);
      });
  }, []);

  return (
    <div>
      <table className='m-4'>
        <caption>Liste des RPG</caption>
        <thead className='border-black border border-solid'>
          <tr>
            <th className='border-black border border-solid'>Nom</th>
            <th className='border-black border border-solid'>Plate-forme</th>
            <th className='border-black border border-solid'>Genre</th>
            <th className='border-black border border-solid'>Développeur</th>
          </tr>
        </thead>
        <tbody>
          {dataRPG.map((rpg) => (
            <tr key={rpg.id}>
              <td className='border-black border border-solid'>{rpg.name}</td>
              <td className='border-black border border-solid'>
                {rpg.support}
              </td>
              <td className='border-black border border-solid'>{rpg.genre}</td>
              <td className='border-black border border-solid'>
                {rpg.developer}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
