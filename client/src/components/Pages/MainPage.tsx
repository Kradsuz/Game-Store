import React, { useEffect } from 'react';
import { getDBGamesThunkAction } from '../../features/actions/dbThunkActions';
import { useAppDispatch, useAppSelector } from '../../features/reduxHooks';
import OneGameDB from '../UI/OneGameDB';

export default function MainPage(): JSX.Element {
 const dbGames = useAppSelector(state=>state.dbData.dbGames)
 const dispatch = useAppDispatch()
useEffect(() => {
dispatch(getDBGamesThunkAction()).catch(()=>{})
}, [])


  return (
<>
{dbGames.map((el) => (
        <OneGameDB key={el.id} game={el} />
      ))}
</>
  )
}
