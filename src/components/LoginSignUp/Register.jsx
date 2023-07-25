import React from 'react';
import { ImFloppyDisk } from 'react-icons/im';

export default function Register() {
  return (
    <div className='font-candara bg-gray-800 text-white w-[412px] h-[435px] rounded-xl pt-1 mt-5 mb-5 ml-[40%]'>
      <h3 className='text-4xl text-center mt-6 '>Inscription</h3>
      <form action='/register' method='post' className='ml-28 mt-6'>
        <label for='username' className='font-bold'>
          Nom d'utilisateur
        </label>
        <br />
        <input
          type='text'
          id='username'
          name='username'
          required
          className='border border-gray-600 border-solid rounded px-2 py-1 text-gray-800'
        />
        <br />
        <br />
        <label for='email' className='font-bold'>
          Adresse e-mail
        </label>
        <br />
        <input
          type='email'
          id='email'
          name='email'
          required
          className='border border-gray-600 border-solid rounded px-2 py-1 text-gray-800'
        />
        <br />
        <br />
        <label for='password' className='font-bold'>
          Mot de passe
        </label>
        <br />
        <input
          type='password'
          id='password'
          name='password'
          required
          className='border border-gray-600 border-solid rounded px-2 py-1 text-gray-800'
        />
        <br />
        <br />
        <button
          type='submit'
          className='bg-white text-gray-800 font-bold py-2 px-4 rounded flex'
        >
          <ImFloppyDisk className='mt-1 mr-1' />
          S'inscrire
        </button>
      </form>
    </div>
  );
}
