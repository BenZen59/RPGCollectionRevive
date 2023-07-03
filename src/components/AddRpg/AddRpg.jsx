import React, { useState } from 'react';
import ImageUploader from '../ImageUploader/ImageUploder';
import axios from 'axios';

export default function AddRpg() {
  const [rpgData, setRpgData] = useState({
    name: '',
    support: '',
    genre: '',
    developer: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRpgData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(rpgData);
    try {
      const response = axios.post('http://localhost:8080/api/v1/rpg', rpgData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(response.data);
      // Faites quelque chose avec la réponse si nécessaire
    } catch (error) {
      console.error(error);
      // Gérez l'erreur si nécessaire
    }
  };

  return (
    <div className='w-[612px] h-[410px] font-candara shadow-lg border border-black border-solid border-opacity-20 m-5'>
      <h3 className='text-4xl text-center mt-6 mb-6'>
        Ajouter un RPG à la BDD
      </h3>
      <div className='flex ml-8'>
        <form onSubmit={handleSubmit}>
          <div className=''>
            <label htmlFor='nom' className='font-bold'>
              Nom
            </label>
            <br />
            <input
              type='text'
              id='name'
              name='name'
              value={rpgData.name}
              onChange={handleChange}
              className='border border-gray-600 border-solid rounded px-2 py-1 '
            />
          </div>
          <div className=''>
            <label htmlFor='plateforme' className='font-bold'>
              Plate-forme
            </label>
            <br />
            <input
              type='text'
              id='support'
              name='support'
              value={rpgData.support}
              onChange={handleChange}
              className='border border-gray-600 border-solid rounded px-2 py-1 '
            />
          </div>
          <div className=''>
            <label htmlFor='genre' className='font-bold'>
              Genre
            </label>
            <br />
            <input
              type='text'
              id='genre'
              name='genre'
              value={rpgData.genre}
              onChange={handleChange}
              className='border border-gray-600 border-solid rounded px-2 py-1 '
            />
          </div>
          <div className=''>
            <label htmlFor='developpeur' className='font-bold'>
              Développeur
            </label>
            <br />
            <input
              type='text'
              id='developer'
              name='developer'
              value={rpgData.developer}
              onChange={handleChange}
              className='border border-gray-600 border-solid rounded px-2 py-1'
            />
          </div>
          <br />
          <button
            type='submit'
            className='bg-gray-900 text-white font-bold py-2 px-4 rounded'
          >
            Enregistrer
          </button>
        </form>
        <ImageUploader />
      </div>
    </div>
  );
}
