import React, { useState } from 'react';
import axios from 'axios';
import SellerOfferPage from '../LKSeller/SellerOfferPage';
import { useAppDispatch, useAppSelector } from '../../../features/reduxHooks';
import { checkUserActionThunk } from '../../../features/actions/userActions';
import Chat from '../Chat';

export default function LKMulter(): JSX.Element {
  const [image, setImage] = useState<File | string>('');
  const dispatch = useAppDispatch();
  const role = useAppSelector((state) => state.userData.user?.roleId);
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
    <>
      <div className="row d-flex justify-content-center pt-5">
        <div
          className="col d-flex justify-content-center"
          style={{ width: '100%' }}
        >
          <form
            onSubmit={handleSubmit}
            encType="multipart/form-data"
            style={{
              marginBottom: '20px',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <label
              htmlFor="image"
              style={{
                backgroundColor: '#f0f0f0',
                padding: '10px',
                borderRadius: '5px',
                cursor: 'pointer',
                marginBottom: '',
              }}
            >
              Выберите аватар
            </label>
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={(event) =>
                event.target.files
                  ? setImage(event.target.files[0])
                  : setImage('')
              }
              required
              style={{ display: 'none' }}
            />
            <button
              type="submit"
              style={{
                padding: '10px',
                borderRadius: '5px',
                border: 'none',
                cursor: 'pointer',
                backgroundColor: 'black',
                color: 'white',
              }}
            >
              Добавить
            </button>
          </form>
        </div>
      </div>
      <Chat seller={undefined} />
      {role !== 1 && (
        <>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '10vh',
              backgroundColor: '#f2f2f2',
            }}
          >
            <h1
              style={{
                textAlign: 'center',
                color: '#333',
                fontSize: '3rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
              }}
            >
              Мои предложения
            </h1>
          </div>
          <SellerOfferPage />
        </>
      )}
    </>
  );
}
