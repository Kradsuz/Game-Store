import React, { useState } from 'react';
import axios from 'axios';

export default function LKMulter(): JSX.Element {
  const [image, setImage] = useState(null);
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('image', image);
    axios
      .patch('/api/avatar/addAvatar', formData)
      .then(() => {
        console.log('Card added to database');

        setImage(null);
        window.location.href = '/account';
      })
      .catch((error) => {
        console.error('Error adding card to database', error);
      });
  };
  return (
    <div className="row d-flex justify-content-center pt-5 mt-5">
      <div
        className="col d-flex justify-content-center"
        style={{ width: '100%' }}
      >
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <label htmlFor="image">Фото:</label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={(event) => setImage(event.target.files[0])}
            required
          />
          <button type="submit">Добавить</button>
        </form>
      </div>
    </div>
  );
}
