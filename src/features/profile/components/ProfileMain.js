import React, { useEffect } from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser, selectUser } from '../../authentication/slices/userSlice';

// React Router
import { useParams } from 'react-router-dom';

// MUI
import { Button } from '@mui/material';

// Hooks
import useFirebaseLogout from '../../authentication/hooks/useFirebaseLogout';

// Services
import { useGetPokemonByNameQuery } from '../../../services/pokemonServices';

const ProfileMain = () => {
  const { userId } = useParams();
  const dispatch = useDispatch(userId);
  // const { data, authenticated, loading, error } = useSelector(selectUser);
  const { data, error, isLoading } = useGetPokemonByNameQuery('charizard');

  useEffect(() => {
    dispatch(fetchUser(userId));
  }, [dispatch, userId]);

  const { logout } = useFirebaseLogout();

  // if (loading) {
  //   return <p>Loading...</p>;
  // }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (data === null) {
    return null;
  }

  return (
    <div>
      {/* {<p>{data.email}</p>} */}

      <div>
        {error ? (
          <>Oh no, there was an error</>
        ) : isLoading ? (
          <>Loading...</>
        ) : data ? (
          <>
            <h3>{data.species.name}</h3>
            <img src={data.sprites.front_shiny} alt={data.species.name} />
          </>
        ) : null}
      </div>

      <Button color='warning' sx={{ textTransform: 'none' }} onClick={logout}>
        Logout
      </Button>
    </div>
  );
};

export default ProfileMain;
