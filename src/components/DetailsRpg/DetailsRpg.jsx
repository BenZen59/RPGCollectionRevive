import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import SupportButton from '../Button/SupportButton';
import GenreButton from '../Button/GenreButton';

export default function DetailsRPG() {
  const location = useLocation();
  const { name, support, genre, developer, imagerpg, boxrpg } = location.state;

  const { id } = useParams();

  const supports = [
    {
      value: 'GB',
      label: <SupportButton SupportId={1} />,
    },
    {
      value: 'GBA',
      label: <SupportButton SupportId={2} />,
    },
    {
      value: 'GBC',
      label: <SupportButton SupportId={3} />,
    },
    {
      value: 'GC',
      label: <SupportButton SupportId={4} />,
    },
    {
      value: 'NES',
      label: <SupportButton SupportId={5} />,
    },
    {
      value: '3DS',
      label: <SupportButton SupportId={6} />,
    },
    {
      value: 'DS',
      label: <SupportButton SupportId={7} />,
    },
    {
      value: 'Switch',
      label: <SupportButton SupportId={8} />,
    },
    {
      value: 'PC',
      label: <SupportButton SupportId={9} />,
    },
    {
      value: 'PC98',
      label: <SupportButton SupportId={10} />,
    },
    {
      value: 'PS1',
      label: <SupportButton SupportId={11} />,
    },
    {
      value: 'PS2',
      label: <SupportButton SupportId={12} />,
    },
    {
      value: 'PS3',
      label: <SupportButton SupportId={13} />,
    },
    {
      value: 'PS4',
      label: <SupportButton SupportId={14} />,
    },
    {
      value: 'PS5',
      label: <SupportButton SupportId={15} />,
    },
    {
      value: 'PSP',
      label: <SupportButton SupportId={16} />,
    },
    {
      value: 'SNES',
      label: <SupportButton SupportId={17} />,
    },
    {
      value: 'Wii',
      label: <SupportButton SupportId={18} />,
    },
  ];

  const genres = [
    {
      value: '? RPG',
      label: <GenreButton GenreId={1} />,
    },
    {
      value: 'ADV',
      label: <GenreButton GenreId={2} />,
    },
    {
      value: 'A-RPG',
      label: <GenreButton GenreId={3} />,
    },
    {
      value: 'CARD',
      label: <GenreButton GenreId={4} />,
    },
    {
      value: 'C-RPG',
      label: <GenreButton GenreId={5} />,
    },
    {
      value: 'D-RPG',
      label: <GenreButton GenreId={6} />,
    },
    {
      value: 'H-RPG',
      label: <GenreButton GenreId={7} />,
    },
    {
      value: 'H-SLG',
      label: <GenreButton GenreId={8} />,
    },
    {
      value: 'MMO',
      label: <GenreButton GenreId={9} />,
    },
    {
      value: 'ROGUE',
      label: <GenreButton GenreId={10} />,
    },
    {
      value: 'SHOOT',
      label: <GenreButton GenreId={11} />,
    },
    {
      value: 'SIM',
      label: <GenreButton GenreId={12} />,
    },
    {
      value: 'S-RPG',
      label: <GenreButton GenreId={13} />,
    },
    {
      value: 'T-RPG',
      label: <GenreButton GenreId={14} />,
    },
  ];

  const defineSupport = (support) => {
    switch (support) {
      case 'GB':
        return 1;
      case 'GBA':
        return 2;
      case 'GBC':
        return 3;
      case 'GC':
        return 4;
      case 'NES':
        return 5;
      case '3DS':
        return 6;
      case 'DS':
        return 7;
      case 'Switch':
        return 8;
      case 'PC':
        return 9;
      case 'PC98':
        return 10;
      case 'PS1':
        return 11;
      case 'PS2':
        return 12;
      case 'PS3':
        return 13;
      case 'PS4':
        return 14;
      case 'PS5':
        return 15;
      case 'PSP':
        return 16;
      case 'SNES':
        return 17;
      case 'Wii':
        return 18;
      case 'Wii U':
        return 19;
      default:
        return null; // Retourne null si la valeur n'est pas trouvée
    }
  };

  const defineGenre = (genre) => {
    switch (genre) {
      case '? RPG':
        return 1;
      case 'ADV':
        return 2;
      case 'A-RPG':
        return 3;
      case 'CARD':
        return 4;
      case 'C-RPG':
        return 5;
      case 'D-RPG':
        return 6;
      case 'H-RPG':
        return 7;
      case 'H-SLG':
        return 8;
      case 'MMO':
        return 9;
      case 'ROGUE':
        return 10;
      case 'SHOOT':
        return 11;
      case 'SIM':
        return 12;
      case 'S-RPG':
        return 13;
      case 'T-RPG':
        return 14;
      default:
        return null; // Retourne null si la valeur n'est pas trouvée
    }
  };

  return (
    <div className='w-[824px] h-[310px] font-candara rounded-xl mt-[10%] mb-5 ml-[28%] bg-gray-800 text-white pt-1 flex'>
      <div>
        <h3 className='text-4xl mt-6 ml-4 flex'>
          <img
            src={imagerpg}
            alt='imagerpg'
            className='w-16 h-16 rounded mr-2'
          />
          <span className='mt-1'>{name}</span>
        </h3>
        <fieldset className='border border-solid border-white w-[412px] ml-4 mt-4 pl-4 pt-2 pb-4'>
          <legend align='center' className='text-xl ml-[-90px]'>
            Informations Générales
          </legend>
          Plate-forme :
          <button className='font-sans'>
            <SupportButton SupportId={defineSupport(support)} />
          </button>
          <br />
          Genre :
          <button className='font-sans'>
            <GenreButton GenreId={defineGenre(genre)} />
          </button>
          <br />
          Développeur : {developer}
        </fieldset>
      </div>
      <div className='flex ml-[70px] w-[275px]'>
        <img src={boxrpg} alt='boxrpg' className='rounded scale-90' />
      </div>
    </div>
  );
}
