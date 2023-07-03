import React, { useState } from 'react';

const ImageUploader = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [resizedImage, setResizedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
    resizeImage(URL.createObjectURL(file));
  };

  const resizeImage = (imageUrl) => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    const img = document.createElement('img');
    img.src = imageUrl;
    img.onload = () => {
      canvas.width = 60;
      canvas.height = 60;
      context.drawImage(img, 0, 0, 60, 60);
      setResizedImage(canvas.toDataURL('image/png'));
    };
  };

  return (
    <div>
      <input
        type='file'
        onChange={handleImageChange}
        className='bg-gray-900 text-white font-bold py-2 px-4 rounded m-4'
      />
      {resizedImage && (
        <img
          src={resizedImage}
          alt='Resized'
          className='border border-gray-600 border-solid ml-4'
        />
      )}
    </div>
  );
};

export default ImageUploader;
