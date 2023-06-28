import React from 'react';

export default function SupportButton({ SupportId }) {
  const supports = [
    {
      id: 1,
      name: 'GB',
      style: 'bg-yellow-200 text-gray-700',
    },
    {
      id: 2,
      name: 'GBA',
      style: 'bg-gray-100 text-purple-500',
    },
    {
      id: 3,
      name: 'GBC',
      style: 'bg-yellow-300 text-green-700',
    },
    {
      id: 4,
      name: 'GC',
      style: 'bg-purple-700 text-gray-200',
    },
    {
      id: 5,
      name: 'NES',
      style: 'bg-green-50 text-red-700',
    },
    {
      id: 6,
      name: '3DS',
      style: 'bg-gray-200 text-red-600',
    },
    {
      id: 7,
      name: 'DS',
      style: 'bg-gray-50 text-red-600',
    },
    {
      id: 8,
      name: 'Switch',
      style: 'bg-red-50 text-red-600',
    },
    {
      id: 9,
      name: 'PC',
      style: 'bg-gray-300 text-gray-900',
    },
    {
      id: 10,
      name: 'PC98',
      style: 'bg-orange-400 text-yellow-800',
    },
    {
      id: 11,
      name: 'PS1',
      style: 'bg-white text-blue-500',
    },
    {
      id: 12,
      name: 'PS2',
      style: 'bg-indigo-700 text-gray-200',
    },
    {
      id: 13,
      name: 'PS3',
      style: 'bg-gray-900 text-blue-500',
    },
    {
      id: 14,
      name: 'PS4',
      style: 'bg-blue-800 text-blue-300',
    },

    {
      id: 15,
      name: 'PS5',
      style: 'bg-black text-white',
    },
    {
      id: 16,
      name: 'PSP',
      style: 'bg-gray-900 text-gray-100',
    },
    {
      id: 17,
      name: 'SNES',
      style: 'bg-gray-300 text-red-700',
    },
    {
      id: 18,
      name: 'Wii',
      style: 'bg-red-800 text-pink-100',
    },
    {
      id: 19,
      name: 'Wii U',
      style: 'bg-gray-800 text-teal-500',
    },
  ];

  const boutonAfficher = supports.find((support) => support.id === SupportId);
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
