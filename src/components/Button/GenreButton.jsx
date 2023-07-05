import React from 'react';

export default function GenreButton({ GenreId }) {
  const genres = [
    {
      id: 1,
      name: '? RPG',
      style: 'bg-gray-200 text-green-800',
    },
    {
      id: 2,
      name: 'ADV',
      style: 'bg-black text-green-400',
    },
    {
      id: 3,
      name: 'A-RPG',
      style: 'bg-yellow-400 text-green-800',
    },
    {
      id: 4,
      name: 'CARD',
      style: 'bg-teal-500 text-green-900',
    },
    {
      id: 5,
      name: 'C-RPG',
      style: 'bg-red-500 text-green-900',
    },
    {
      id: 6,
      name: 'D-RPG',
      style: 'bg-purple-500 text-green-900',
    },
    {
      id: 7,
      name: 'H-RPG',
      style: 'bg-pink-200 text-green-800',
    },
    {
      id: 8,
      name: 'H-SLG',
      style: 'bg-indigo-400 text-green-900',
    },
    {
      id: 9,
      name: 'MMO',
      style: 'bg-green-900 text-green-400',
    },
    {
      id: 10,
      name: 'ROGUE',
      style: 'bg-gray-500 text-green-400',
    },
    {
      id: 11,
      name: 'SHOOT',
      style: 'bg-purple-800 text-green-400',
    },
    {
      id: 12,
      name: 'SIM',
      style: 'bg-gray-600 text-green-400',
    },
    {
      id: 13,
      name: 'S-RPG',
      style: 'bg-blue-800 text-green-400',
    },
    {
      id: 14,
      name: 'T-RPG',
      style: 'bg-teal-700 text-green-400',
    },
  ];

  const boutonAfficher = genres.find((genre) => genre.id === GenreId);
  if (!boutonAfficher) {
    return null;
  }
  return (
    <div>
      <button
        key={boutonAfficher.id}
        className={`w-[60px] h-[26px] text-[14px] rounded-3xl ${boutonAfficher.style} shadow-lg border-black border-opacity-10 border m-3`}
      >
        {boutonAfficher.name}
      </button>
    </div>
  );
}
