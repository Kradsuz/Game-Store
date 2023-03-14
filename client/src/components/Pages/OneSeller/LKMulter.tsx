
import React, { useState } from 'react';
import axios from 'axios';
import { useAppDispatch } from '../../../features/reduxHooks';
import { checkUserActionThunk } from '../../../features/actions/userActions';

export default function LKMulter(): JSX.Element {
  const [image, setImage] = useState<File | string>('');
  const dispatch = useAppDispatch();
  const handleSubmit = (event: React.FormEvent<HTMLElement>): void => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('image', image);
    axios
      .patch('/api/avatar/addAvatar', formData)
      .then(() => {
        console.log('Card added to database');
        dispatch(checkUserActionThunk()).catch((err) => console.log(err));
        setImage('');
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
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={(event) => (event.target.files ? setImage(event.target.files[0]) : setImage(''))}
            required
          />
          <button type="submit">Добавить</button>
        </form>
      </div>
    </div>
  );
}
