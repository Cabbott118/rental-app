import React, { useState } from 'react';

// MUI
import { Grid, TextField } from '@mui/material';
import { MyButton } from '../../../../lib/mui';

// Services
import { useUpdateUserMutation } from '../../../../services/users/userServices';

// React Router
import { useNavigate } from 'react-router-dom';

// Profile Image Upload
import ProfileImageUpload from './ProfileImageUpload';

const ProfileUpdateForm = ({ userId }) => {
  const navigate = useNavigate();

  const [formState, setFormState] = useState({
    legalName: {
      first: '',
      last: '',
    },
    address: {
      addressLineOne: '',
      city: '',
      state: '',
      zipCode: '',
    },
    phoneNumber: '',
  });

  const [updateUser, { isLoading }] = useUpdateUserMutation();

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === 'phoneNumber') {
      setFormState((prevState) => ({
        ...prevState,
        phoneNumber: value,
      }));
    } else {
      const [parentKey, childKey] = name.split('.');
      setFormState((prevState) => ({
        ...prevState,
        [parentKey]: {
          ...prevState[parentKey],
          [childKey]: value,
        },
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateUser({ userId, formState })
      .unwrap()
      .then(() => {
        console.log(formState);
        console.log('success');
        navigate(`/profile/${userId}`);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <ProfileImageUpload />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name='legalName.first'
            label='First Name'
            value={formState.legalName.first}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name='legalName.last'
            label='Last Name'
            value={formState.legalName.last}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name='address.addressLineOne'
            label='Address Line 1'
            value={formState.address.addressLineOne}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            name='address.city'
            label='City'
            value={formState.address.city}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            name='address.state'
            label='State'
            value={formState.address.state}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            name='address.zipCode'
            label='Zip Code'
            value={formState.address.zipCode}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name='phoneNumber'
            label='Phone Number'
            value={formState.phoneNumber}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <MyButton fullWidth text='Submit' loading={isLoading} />
        </Grid>
      </Grid>
    </form>
  );
};

export default ProfileUpdateForm;
