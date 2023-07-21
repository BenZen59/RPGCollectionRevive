import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GiBookCover } from 'react-icons/gi';
import { MdLoupe } from 'react-icons/md';
import { GrUpdate } from 'react-icons/gr';
import { BiPlus } from 'react-icons/bi';
import { AiFillCloseCircle } from 'react-icons/ai';
import RPGService from '../../services/RPGService';
import SupportButton from '../Button/SupportButton';
import GenreButton from '../Button/GenreButton';
import './FixListRPG.css';

export default function ListRPG() {
  const [dataRPG, setDataRPG] = useState([]);
  const [showImage, setShowImage] = useState(false);
  const [idCover, setIdCover] = useState([]);

  const toggleImage = (box) => {
    setIdCover(box);
    setShowImage(!showImage);
  };

  useEffect(() => {
    RPGService.getRPGname()
      .then((response) => {
        setDataRPG(response.data);
      })
      .catch((error) => {
        console.error('Error fetching RPG list:', error);
      });
  }, []);

  const sortName = () => {
    RPGService.getRPGname()
      .then((response) => {
        setDataRPG(response.data);
      })
      .catch((error) => {
        console.error('Error fetching RPG list:', error);
      });
  };

  const sortSupport = () => {
    RPGService.getRPGsupport()
      .then((response) => {
        setDataRPG(response.data);
      })
      .catch((error) => {
        console.error('Error fetching RPG list:', error);
      });
  };

  const sortGenre = () => {
    RPGService.getRPGgenre()
      .then((response) => {
        setDataRPG(response.data);
      })
      .catch((error) => {
        console.error('Error fetching RPG list:', error);
      });
  };

  const sortGB = () => {
    RPGService.getGB()
      .then((response) => {
        setDataRPG(response.data);
      })
      .catch((error) => {
        console.error('Error fetching RPG list:', error);
      });
  };

  const sortGBC = () => {
    RPGService.getGBC()
      .then((response) => {
        setDataRPG(response.data);
      })
      .catch((error) => {
        console.error('Error fetching RPG list:', error);
      });
  };

  const sortGBA = () => {
    RPGService.getGBA()
      .then((response) => {
        setDataRPG(response.data);
      })
      .catch((error) => {
        console.error('Error fetching RPG list:', error);
      });
  };

  const sortGC = () => {
    RPGService.getGC()
      .then((response) => {
        setDataRPG(response.data);
      })
      .catch((error) => {
        console.error('Error fetching RPG list:', error);
      });
  };

  const sortNES = () => {
    RPGService.getNES()
      .then((response) => {
        setDataRPG(response.data);
      })
      .catch((error) => {
        console.error('Error fetching RPG list:', error);
      });
  };

  const sort3DS = () => {
    RPGService.get3DS()
      .then((response) => {
        setDataRPG(response.data);
      })
      .catch((error) => {
        console.error('Error fetching RPG list:', error);
      });
  };

  const sortDS = () => {
    RPGService.getDS()
      .then((response) => {
        setDataRPG(response.data);
      })
      .catch((error) => {
        console.error('Error fetching RPG list:', error);
      });
  };

  const sortSwitch = () => {
    RPGService.getSwitch()
      .then((response) => {
        setDataRPG(response.data);
      })
      .catch((error) => {
        console.error('Error fetching RPG list:', error);
      });
  };

  const sortPC = () => {
    RPGService.getPC()
      .then((response) => {
        setDataRPG(response.data);
      })
      .catch((error) => {
        console.error('Error fetching RPG list:', error);
      });
  };

  const sortPC98 = () => {
    RPGService.getPC98()
      .then((response) => {
        setDataRPG(response.data);
      })
      .catch((error) => {
        console.error('Error fetching RPG list:', error);
      });
  };

  const sortPS1 = () => {
    RPGService.getPS1()
      .then((response) => {
        setDataRPG(response.data);
      })
      .catch((error) => {
        console.error('Error fetching RPG list:', error);
      });
  };

  const sortPS2 = () => {
    RPGService.getPS2()
      .then((response) => {
        setDataRPG(response.data);
      })
      .catch((error) => {
        console.error('Error fetching RPG list:', error);
      });
  };

  const sortPS3 = () => {
    RPGService.getPS3()
      .then((response) => {
        setDataRPG(response.data);
      })
      .catch((error) => {
        console.error('Error fetching RPG list:', error);
      });
  };

  const sortPS4 = () => {
    RPGService.getPS4()
      .then((response) => {
        setDataRPG(response.data);
      })
      .catch((error) => {
        console.error('Error fetching RPG list:', error);
      });
  };

  const sortPS5 = () => {
    RPGService.getPS5()
      .then((response) => {
        setDataRPG(response.data);
      })
      .catch((error) => {
        console.error('Error fetching RPG list:', error);
      });
  };

  const sortPSP = () => {
    RPGService.getPSP()
      .then((response) => {
        setDataRPG(response.data);
      })
      .catch((error) => {
        console.error('Error fetching RPG list:', error);
      });
  };

  const sortSNES = () => {
    RPGService.getSNES()
      .then((response) => {
        setDataRPG(response.data);
      })
      .catch((error) => {
        console.error('Error fetching RPG list:', error);
      });
  };

  const sortWii = () => {
    RPGService.getWii()
      .then((response) => {
        setDataRPG(response.data);
      })
      .catch((error) => {
        console.error('Error fetching RPG list:', error);
      });
  };

  const sortWiiU = () => {
    RPGService.getWiiU()
      .then((response) => {
        setDataRPG(response.data);
      })
      .catch((error) => {
        console.error('Error fetching RPG list:', error);
      });
  };

  const sortunknowrpg = () => {
    RPGService.getunknowrpg()
      .then((response) => {
        setDataRPG(response.data);
      })
      .catch((error) => {
        console.error('Error fetching RPG list:', error);
      });
  };

  const sortADV = () => {
    RPGService.getADV()
      .then((response) => {
        setDataRPG(response.data);
      })
      .catch((error) => {
        console.error('Error fetching RPG list:', error);
      });
  };

  const sortARPG = () => {
    RPGService.getARPG()
      .then((response) => {
        setDataRPG(response.data);
      })
      .catch((error) => {
        console.error('Error fetching RPG list:', error);
      });
  };

  const sortCARD = () => {
    RPGService.getCARD()
      .then((response) => {
        setDataRPG(response.data);
      })
      .catch((error) => {
        console.error('Error fetching RPG list:', error);
      });
  };

  const sortCRPG = () => {
    RPGService.getCRPG()
      .then((response) => {
        setDataRPG(response.data);
      })
      .catch((error) => {
        console.error('Error fetching RPG list:', error);
      });
  };

  const sortDRPG = () => {
    RPGService.getDRPG()
      .then((response) => {
        setDataRPG(response.data);
      })
      .catch((error) => {
        console.error('Error fetching RPG list:', error);
      });
  };

  const sortHRPG = () => {
    RPGService.getHRPG()
      .then((response) => {
        setDataRPG(response.data);
      })
      .catch((error) => {
        console.error('Error fetching RPG list:', error);
      });
  };

  const sortHSLG = () => {
    RPGService.getHSLG()
      .then((response) => {
        setDataRPG(response.data);
      })
      .catch((error) => {
        console.error('Error fetching RPG list:', error);
      });
  };

  const sortMMO = () => {
    RPGService.getMMO()
      .then((response) => {
        setDataRPG(response.data);
      })
      .catch((error) => {
        console.error('Error fetching RPG list:', error);
      });
  };

  const sortROGUE = () => {
    RPGService.getROGUE()
      .then((response) => {
        setDataRPG(response.data);
      })
      .catch((error) => {
        console.error('Error fetching RPG list:', error);
      });
  };

  const sortSHOOT = () => {
    RPGService.getSHOOT()
      .then((response) => {
        setDataRPG(response.data);
      })
      .catch((error) => {
        console.error('Error fetching RPG list:', error);
      });
  };

  const sortSIM = () => {
    RPGService.getSIM()
      .then((response) => {
        setDataRPG(response.data);
      })
      .catch((error) => {
        console.error('Error fetching RPG list:', error);
      });
  };

  const sortSRPG = () => {
    RPGService.getSRPG()
      .then((response) => {
        setDataRPG(response.data);
      })
      .catch((error) => {
        console.error('Error fetching RPG list:', error);
      });
  };

  const sortTRPG = () => {
    RPGService.getTRPG()
      .then((response) => {
        setDataRPG(response.data);
      })
      .catch((error) => {
        console.error('Error fetching RPG list:', error);
      });
  };

  const sortDeveloper = () => {
    RPGService.getRPGdeveloper()
      .then((response) => {
        setDataRPG(response.data);
      })
      .catch((error) => {
        console.error('Error fetching RPG list:', error);
      });
  };

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
    {
      value: 'Wii U',
      label: <SupportButton SupportId={19} />,
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

  const HandleUpdate = (
    id,
    name,
    support,
    genre,
    developer,
    imagerpg,
    boxrpg
  ) => {
    navigate(`/updaterpg/${id}`, {
      state: {
        name: name,
        support: support,
        genre: genre,
        developer: developer,
        imagerpg: imagerpg,
        boxrpg: boxrpg,
      },
    });
  };

  const HandleDetails = (
    id,
    name,
    support,
    genre,
    developer,
    imagerpg,
    boxrpg
  ) => {
    navigate(`/detailsrpg/${id}`, {
      state: {
        name: name,
        support: support,
        genre: genre,
        developer: developer,
        imagerpg: imagerpg,
        boxrpg: boxrpg,
      },
    });
  };

  return (
    <>
      <div className='flex flex-col items-center mt-8'>
        <div className='flex bg-gray-800 rounded-t-xl w-auto'>
          <button onClick={sortGB}>
            <SupportButton SupportId={1} />
          </button>
          <button onClick={sortGBA}>
            <SupportButton SupportId={2} />
          </button>
          <button onClick={sortGBC}>
            <SupportButton SupportId={3} />
          </button>
          <button onClick={sortGC}>
            <SupportButton SupportId={4} />
          </button>
          <button onClick={sortNES}>
            <SupportButton SupportId={5} />
          </button>
          <button onClick={sort3DS}>
            <SupportButton SupportId={6} />
          </button>
          <button onClick={sortDS}>
            <SupportButton SupportId={7} />
          </button>
          <button onClick={sortSwitch}>
            <SupportButton SupportId={8} />
          </button>
          <button onClick={sortPC}>
            <SupportButton SupportId={9} />
          </button>
          <button onClick={sortPC98}>
            <SupportButton SupportId={10} />
          </button>
          <button onClick={sortPS1}>
            <SupportButton SupportId={11} />
          </button>
          <button onClick={sortPS2}>
            <SupportButton SupportId={12} />
          </button>
          <button onClick={sortPS3}>
            <SupportButton SupportId={13} />
          </button>
          <button onClick={sortPS4}>
            <SupportButton SupportId={14} />
          </button>
          <button onClick={sortPS5}>
            <SupportButton SupportId={15} />
          </button>
          <button onClick={sortPSP}>
            <SupportButton SupportId={16} />
          </button>
          <button onClick={sortSNES}>
            <SupportButton SupportId={17} />
          </button>
          <button onClick={sortWii}>
            <SupportButton SupportId={18} />
          </button>
          <button onClick={sortWiiU}>
            <SupportButton SupportId={19} />
          </button>
        </div>
        <div className='flex mb-8 bg-gray-800 rounded-b-xl'>
          <button onClick={sortunknowrpg}>
            <GenreButton GenreId={1} />
          </button>
          <button onClick={sortADV}>
            <GenreButton GenreId={2} />
          </button>
          <button onClick={sortARPG}>
            <GenreButton GenreId={3} />
          </button>
          <button onClick={sortCARD}>
            <GenreButton GenreId={4} />
          </button>
          <button onClick={sortCRPG}>
            <GenreButton GenreId={5} />
          </button>
          <button onClick={sortDRPG}>
            <GenreButton GenreId={6} />
          </button>
          <button onClick={sortHRPG}>
            <GenreButton GenreId={7} />
          </button>
          <button onClick={sortHSLG}>
            <GenreButton GenreId={8} />
          </button>
          <button onClick={sortMMO}>
            <GenreButton GenreId={9} />
          </button>
          <button onClick={sortROGUE}>
            <GenreButton GenreId={10} />
          </button>
          <button onClick={sortSHOOT}>
            <GenreButton GenreId={11} />
          </button>
          <button onClick={sortSIM}>
            <GenreButton GenreId={12} />
          </button>
          <button onClick={sortSRPG}>
            <GenreButton GenreId={13} />
          </button>
          <button onClick={sortTRPG}>
            <GenreButton GenreId={14} />
          </button>
        </div>
      </div>
      <div className='ml-[14%] font-candara'>
        <Link
          to='/addrpg'
          className='bg-gray-800 text-white font-bold py-2 px-4 rounded ml-4 flex w-[160px]'
        >
          <BiPlus className='mt-1 mr-1' />
          Ajouter un RPG
        </Link>
        <h1 className='font-bold text-2xl mb-4 ml-[36%] text-gray-800'>
          Liste des RPG
        </h1>
        <table className='ml-4 mt-1 mb-8 bg-white border-separate border-spacing-y-4  border border-white text-white'>
          <thead className='mb-3'>
            <tr className='text-xl'>
              <th className=' border-t border-l border-white border-solid bg-white'></th>
              <th className='p-4 border rounded-xl order-slate-600 bg-gray-800 '>
                <button onClick={sortName} className='hover:underline'>
                  Nom
                </button>
              </th>
              <th className='p-4 border rounded-xl bg-gray-800'>
                <button onClick={sortSupport} className='hover:underline'>
                  Plate-forme
                </button>
              </th>
              <th className='p-4 border rounded-xl bg-gray-800'>
                <button onClick={sortGenre} className='hover:underline'>
                  Genre
                </button>
              </th>
              <th className='p-4 border rounded-xl bg-gray-800'>
                <button onClick={sortDeveloper} className='hover:underline'>
                  Développeur
                </button>
              </th>
              <th className='border-t border-r border-white border-solid bg-white'></th>
              <th className='border-t border-r border-white border-solid bg-white'></th>
            </tr>
          </thead>
          <tbody>
            {dataRPG.map((rpg) => (
              <tr key={rpg.id} className='text-center'>
                <td className='p-2 bg-gray-800 rounded-l-xl'>
                  {rpg.imagerpg && (
                    <img
                      src={rpg.imagerpg}
                      alt='imagerpg'
                      className='w-16 h-16 rounded'
                    />
                  )}
                </td>
                <td className='p-4 text-2xl font-bold border border-solid border-gray-800 bg-gray-800'>
                  {rpg.name}
                </td>
                <td className=' bg-gray-800 border border-solid border-gray-800'>
                  <button className='font-sans'>
                    <SupportButton SupportId={defineSupport(rpg.support)} />
                  </button>
                </td>
                <td className=' bg-gray-800 border border-solid border-gray-800'>
                  <button className='font-sans'>
                    <GenreButton GenreId={defineGenre(rpg.genre)} />
                  </button>
                </td>
                <td className='text-xl p-4  bg-gray-800 border border-solid border-gray-800'>
                  {rpg.developer}
                </td>
                <td className='p-4  bg-gray-800 border border-solid border-gray-800'>
                  <button
                    className='bg-white text-gray-800 font-bold py-2 px-4 rounded flex'
                    onClick={() =>
                      HandleDetails(
                        rpg.id,
                        rpg.name,
                        rpg.support,
                        rpg.genre,
                        rpg.developer,
                        rpg.imagerpg,
                        rpg.boxrpg
                      )
                    }
                  >
                    <MdLoupe className='mt-1 mr-1' />
                    Details
                  </button>
                </td>
                <td className='p-4  bg-gray-800 border border-solid border-gray-800 '>
                  <button
                    className='bg-white text-gray-800 font-bold py-2 px-4 rounded flex'
                    onClick={() =>
                      HandleUpdate(
                        rpg.id,
                        rpg.name,
                        rpg.support,
                        rpg.genre,
                        rpg.developer,
                        rpg.imagerpg,
                        rpg.boxrpg
                      )
                    }
                  >
                    <GrUpdate className='mt-1 mr-1' />
                    Update
                  </button>
                </td>
                <td className='p-4  bg-gray-800 border border-solid border-gray-800 rounded-r-xl'>
                  <button
                    className='bg-white text-gray-800 font-bold py-2 px-4 rounded flex'
                    onClick={() => {
                      toggleImage(rpg.boxrpg);
                    }}
                  >
                    <GiBookCover className='mt-1 mr-1' />
                    Cover
                  </button>
                  {showImage && (
                    <div className='fixopacity fixed top-0 left-0 w-full flex items-center justify-center mt-4'>
                      {rpg.boxrpg && (
                        <div className='flex bg-transparent'>
                          <img
                            src={idCover}
                            alt='coverrpg'
                            className='rounded'
                          />
                          <button
                            className='h-10 bg-white text-gray-800 font-bold py-2 px-4 rounded flex ml-2'
                            onClick={() => {
                              setShowImage(!showImage);
                            }}
                          >
                            <AiFillCloseCircle className='mt-1 mr-1' />
                            Close
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
