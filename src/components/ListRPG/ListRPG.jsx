import React, { useState, useEffect } from 'react';
import RPGService from '../../services/RPGService';
import { Link, useNavigate } from 'react-router-dom';
import SupportButton from '../Button/SupportButton';
import GenreButton from '../Button/GenreButton';
import Select, { components } from 'react-select';
import './Fixcss.css';

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

  const navigate = useNavigate();
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

  const HandleUpdate = (id, name, support, genre, developer, imagerpg) => {
    navigate(`/updaterpg/${id}`, {
      state: {
        name: name,
        support: support,
        genre: genre,
        developer: developer,
        imagerpg: imagerpg,
      },
    });
  };

  const HandleDetails = (id, name, support, genre, developer, imagerpg) => {
    navigate(`/detailsrpg/${id}`, {
      state: {
        name: name,
        support: support,
        genre: genre,
        developer: developer,
        imagerpg: imagerpg,
      },
    });
  };

  return (
    <div className='ml-[27%] font-candara'>
      <Link
        to='/addrpg'
        className='bg-gray-800 text-white font-bold py-2 px-4 rounded ml-4'
      >
        Ajouter un RPG
      </Link>
      <h1 className='font-bold text-2xl mb-4 ml-[30%] text-gray-800'>
        Liste des RPG
      </h1>
      <table className='ml-4 mt-1 mb-8 bg-white border-separate border-spacing-y-4 border border-white text-white shadow-lg'>
        <thead className='mb-3'>
          <tr className='text-xl'>
            <th className=' border-t border-l border-white border-solid bg-white'></th>
            <th className='p-4 border rounded order-slate-600 bg-gray-800'>
              Nom
            </th>
            <th className='p-4 border rounded bg-gray-800'>Plate-forme</th>
            <th className='p-4 border rounded bg-gray-800'>Genre</th>
            <th className='p-4 border rounded bg-gray-800'>Développeur</th>
            <th className='border-t border-r border-white border-solid bg-white'></th>
            <th className='border-t border-r border-white border-solid bg-white'></th>
          </tr>
        </thead>
        <tbody className=''>
          {dataRPG.map((rpg) => (
            <tr key={rpg.id} className='text-center'>
              <td className='border-black border-solid p-2 border bg-gray-800 rounded'>
                {rpg.imagerpg && (
                  <img
                    src={rpg.imagerpg}
                    alt='imagerpg'
                    className='w-32 h-32 border border-gray-600 border-solid rounded '
                  />
                )}
              </td>
              <td className='p-4 text-2xl font-bold border  bg-gray-800'>
                {rpg.name}
              </td>
              <td className='border rounded bg-gray-800'>
                <button className='font-sans'>
                  <SupportButton SupportId={defineSupport(rpg.support)} />
                </button>
              </td>
              <td className='border rounded bg-gray-800'>
                <button className='font-sans'>
                  <GenreButton GenreId={defineGenre(rpg.genre)} />
                </button>
              </td>
              <td className='text-xl p-4 border rounded bg-gray-800'>
                {rpg.developer}
              </td>
              <td className='p-4 border rounded bg-gray-800'>
                <button
                  className='bg-white text-gray-800 font-bold py-2 px-4 rounded'
                  onClick={() =>
                    HandleDetails(
                      rpg.id,
                      rpg.name,
                      rpg.support,
                      rpg.genre,
                      rpg.developer,
                      rpg.imagerpg
                    )
                  }
                >
                  Details
                </button>
              </td>
              <td className='p-4 border rounded bg-gray-800'>
                <button
                  className='bg-white text-gray-800 font-bold py-2 px-4 rounded'
                  onClick={() =>
                    HandleUpdate(
                      rpg.id,
                      rpg.name,
                      rpg.support,
                      rpg.genre,
                      rpg.developer,
                      rpg.imagerpg
                    )
                  }
                >
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
