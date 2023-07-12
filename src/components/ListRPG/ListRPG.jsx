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
  const HandleUpdate = (id, name, support, genre, developer) => {
    navigate(`/updaterpg/${id}`, {
      state: {
        name: name,
        support: support,
        genre: genre,
        developer: developer,
      },
    });
  };

  const DropdownIndicator = (props) => {
    return (
      components.DropdownIndicator && (
        <components.DropdownIndicator {...props}>
          {/* Render your custom button component */}
          <SupportButton SupportId={props.selectProps.value.SupportId} />
          {/* Add a class to target the separator */}
          <span className='custom-select__indicator-separator bg-white'></span>
        </components.DropdownIndicator>
      )
    );
  };

  const CustomSelect = (props) => {
    return (
      <Select
        {...props}
        components={{ ...props.components, DropdownIndicator }}
        isSearchable={false} // Disable search functionality
        menuIsOpen={false} // Close the menu by default
        classNamePrefix='custom-select' // Add a custom class prefix
        className='custom-select-container' // Add a custom class for the select container
        styles={{
          control: (provided) => ({
            ...provided,
            border: 'none', // Remove the border
            boxShadow: 'none', // Remove the box shadow
            width: '96%', // Occupy the full width
            overflowX: 'hidden', // Hide horizontal overflow
            marginLeft: '6px',
          }),
          option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected ? 'lightgray' : 'white', // Set the background color for selected options
            color: state.isSelected ? 'black' : 'inherit', // Set the text color for selected options
          }),
        }}
      />
    );
  };

  return (
    <div>
      <Link
        to='/addrpg'
        className='bg-gray-900 text-white font-bold py-2 px-4 rounded ml-4'
      >
        Ajouter un RPG
      </Link>
      <table className='ml-4 mt-1 mb-8'>
        <caption className='font-bold text-2xl mb-4'>Liste des RPG</caption>
        <thead className='border-black border border-solid'>
          <tr>
            <th className='border-black border border-solid p-4'>Nom</th>
            <th className='border-black border border-solid p-4'>
              Plate-forme
            </th>
            <th className='border-black border border-solid p-4'>Genre</th>
            <th className='border-black border border-solid p-4'>
              Développeur
            </th>
            <th className='border-t border-r border-white border-solid'></th>
          </tr>
        </thead>
        <tbody>
          {dataRPG.map((rpg) => (
            <tr key={rpg.id} className='text-center'>
              <td className='border-black border border-solid p-4'>
                {rpg.name}
              </td>
              <td className='border-black border border-solid '>
                <CustomSelect
                  options={supports}
                  id='support'
                  name='support'
                  value={supports.find(
                    (option) => option.value === rpg.support
                  )}
                />
              </td>
              <td className='border-black border border-solid'>
                <CustomSelect
                  options={genres}
                  id='genre'
                  name='genre'
                  value={genres.find((option) => option.value === rpg.genre)}
                />
              </td>
              <td className='border-black border border-solid p-4'>
                {rpg.developer}
              </td>
              <td className='border-black border border-solid p-4'>
                <button
                  className='bg-gray-900 text-white font-bold py-2 px-4 rounded'
                  onClick={() =>
                    HandleUpdate(
                      rpg.id,
                      rpg.name,
                      rpg.support,
                      rpg.genre,
                      rpg.developer
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
