import React, { useState, Fragment } from 'react';
import { MdLogin, MdLogout, MdAccountCircle, MdAdd } from 'react-icons/md';

export default function Header() {
  const [isLogin, setIsLogin] = useState('');
  return (
    <div
      className='w-full h-16 bg-gradient-to-r from-gray-900 to-black text-white text-5xl text-center font-candara
    '
    >
      <div className='flex justify-center pt-1'>
        <h1>RPG Collection Revive</h1>
        <MdLogin className='ml-[1300px]' />
      </div>
    </div>
  );
}
