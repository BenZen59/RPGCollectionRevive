import React, { useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import axios from 'axios';
import SupportButton from '../Button/SupportButton';
import GenreButton from '../Button/GenreButton';
import Select from 'react-select';

export default function UpdateRpg() {
  const location = useLocation();
  const { name, support, genre, developer, imagerpg } = location.state;
  const [rpgData, setRpgData] = useState({
    name: name,
    support: support,
    genre: genre,
    developer: developer,
    imagerpg: imagerpg,
  });

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

  const handleChange1 = (e) => {
    const { name, value } = e.target;
    setRpgData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleChange2 = (selectedOption) => {
    setRpgData((prevData) => ({
      ...prevData,
      support: selectedOption.value,
    }));
  };

  const handleChange3 = (selectedOption) => {
    setRpgData((prevData) => ({
      ...prevData,
      genre: selectedOption.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(rpgData);
    try {
      const response = axios.put(
        `http://localhost:8080/api/v1/rpg/${id}`,
        rpgData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      console.log(response.data);
      // Faites quelque chose avec la réponse si nécessaire
    } catch (error) {
      console.error(error);
      // Gérez l'erreur si nécessaire
    }
  };
  return (
    <div className='w-[412px] h-[700px] font-candara rounded-xl mt-5 mb-5 ml-[40%] bg-gray-800 text-white pt-1'>
      <h3 className='text-4xl text-center mt-6'>Modifier un RPG</h3>
      <div className='flex ml-24'>
        <form onSubmit={handleSubmit}>
          <div className=''>
            <br />
            <label htmlFor='nom' className='font-bold'>
              Nom
            </label>
            <br />
            <input
              type='text'
              id='name'
              name='name'
              value={rpgData.name}
              onChange={handleChange1}
              className='border border-gray-600 border-solid rounded px-2 py-1 text-gray-800 '
            />
          </div>
          <br />
          <label className='font-bold'>Plate-forme</label>
          <br />
          <Select
            options={supports}
            id='support'
            name='support'
            value={supports.find((option) => option.value === rpgData.support)}
            onChange={handleChange2}
            className='border border-gray-600 border-solid rounded font-sans'
          />
          <br />
          <label className='font-bold'>Genre</label>
          <br />
          <Select
            options={genres}
            id='genre'
            name='genre'
            value={genres.find((option) => option.value === rpgData.genre)}
            onChange={handleChange3}
            className='border border-gray-600 border-solid rounded font-sans'
          />
          <div className=''>
            <br />
            <label htmlFor='developpeur' className='font-bold'>
              Développeur
            </label>
            <br />
            <input
              type='text'
              id='developer'
              name='developer'
              value={rpgData.developer}
              onChange={handleChange1}
              className='border border-gray-600 border-solid rounded px-2 py-1 text-gray-800'
            />
          </div>

          <div className=''>
            <br />
            <label htmlFor='image' className='font-bold'>
              Image RPG
            </label>
            <br />
            <input
              type='text'
              id='imagerpg'
              name='imagerpg'
              value={rpgData.imagerpg}
              onChange={handleChange1}
              className='border border-gray-600 border-solid rounded px-2 py-1 text-gray-800'
            />
            {rpgData.imagerpg && (
              <img
                src={rpgData.imagerpg}
                alt='imagerpg'
                className='w-16 h-16 rounded mt-4'
              />
            )}
          </div>
          <br />
          <button
            type='submit'
            className='bg-white text-gray-800 font-bold py-2 px-4 rounded'
          >
            Enregistrer
          </button>
        </form>
      </div>
    </div>
  );
}
