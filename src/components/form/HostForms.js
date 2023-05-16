// MUI
import { useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { useUpdateUserMutation } from '../../services/users/userServices';

// React-Router
import { useNavigate } from 'react-router-dom';

// Utility
import states from '../../data/states.json';

export const Form1 = ({ formState, setFormState, nextStep }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <Card
      elevation={5}
      sx={{
        backgroundColor: '#hhh',
        mt: '3rem',
      }}
    >
      <CardContent>
        <Typography variant='h6' component='h1'>
          Personal Information
        </Typography>
        <Box component='form' onSubmit={handleSubmit}>
          <Typography variant='caption'>What's your full name?</Typography>
          <TextField
            required
            fullWidth
            id='first'
            label='First Name'
            name='first'
            value={formState.legalName.first}
            onChange={(e) =>
              setFormState({
                ...formState,
                legalName: {
                  ...formState.legalName,
                  first: e.target.value,
                },
              })
            }
            autoFocus
          />
          <TextField
            margin='normal'
            required
            fullWidth
            id='last'
            label='Last Name'
            name='last'
            value={formState.legalName.last}
            onChange={(e) =>
              setFormState({
                ...formState,
                legalName: {
                  ...formState.legalName,
                  last: e.target.value,
                },
              })
            }
          />
          <Typography variant='caption'>When were you born? </Typography>
          <TextField
            sx={{ mb: 1 }}
            required
            fullWidth
            id='dateOfBirth'
            name='dateOfBirth'
            type='date'
            value={formState.dateOfBirth}
            onChange={(e) =>
              setFormState({ ...formState, dateOfBirth: e.target.value })
            }
          />
          <Typography variant='caption'>
            What number can we contact you at?
          </Typography>
          <TextField
            required
            fullWidth
            id='phoneNumber'
            label='Phone Number'
            name='phoneNumber'
            value={formState.phoneNumber}
            onChange={(e) =>
              setFormState({ ...formState, phoneNumber: e.target.value })
            }
          />
          <Button
            type='submit'
            variant='contained'
            sx={{ mt: 2, textTransform: 'none' }}
          >
            Next
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export const Form2 = ({ formState, setFormState, prevStep, nextStep }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <Card
      elevation={5}
      sx={{
        backgroundColor: '#hhh',
        mt: '3rem',
      }}
    >
      <CardContent>
        <Typography variant='h6' component='h1'>
          Physical Address
        </Typography>
        <Box component='form' onSubmit={handleSubmit}>
          <Typography variant='caption'>
            What's your address? This might be used for billing later.
          </Typography>
          <TextField
            required
            fullWidth
            id='addressLineOne'
            label='Address'
            name='addressLineOne'
            value={formState.address.addressLineOne}
            onChange={(e) =>
              setFormState({
                ...formState,
                address: {
                  ...formState.address,
                  addressLineOne: e.target.value,
                },
              })
            }
            autoFocus
            sx={{ mb: 2 }}
          />

          <TextField
            required
            fullWidth
            id='city'
            label='City'
            name='city'
            value={formState.address.city}
            onChange={(e) =>
              setFormState({
                ...formState,
                address: {
                  ...formState.address,
                  city: e.target.value,
                },
              })
            }
            sx={{ mb: 2 }}
          />
          <TextField
            select
            required
            fullWidth
            id='state'
            label='State'
            name='state'
            value={formState.address.state}
            onChange={(e) =>
              setFormState({
                ...formState,
                address: {
                  ...formState.address,
                  state: e.target.value,
                },
              })
            }
            sx={{ mb: 2 }}
          >
            {states.map((state, key) => (
              <MenuItem key={key} value={state.abbreviation}>
                {state.name}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            required
            fullWidth
            id='zipCode'
            label='Zip Code'
            name='zipCode'
            value={formState.address.zipCode}
            onChange={(e) =>
              setFormState({
                ...formState,
                address: {
                  ...formState.address,
                  zipCode: e.target.value,
                },
              })
            }
          />
          <Button
            variant='contained'
            onClick={prevStep}
            color='secondary'
            sx={{ mt: 2, textTransform: 'none' }}
          >
            Back
          </Button>
          <Button
            type='submit'
            variant='contained'
            sx={{ mt: 2, textTransform: 'none' }}
          >
            Next
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export const Form3 = ({ formState, userId, setFormState, prevStep }) => {
  const navigate = useNavigate();

  const [updateUser, { isLoading }] = useUpdateUserMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser({ userId, formState })
      .unwrap()
      .then(() => {
        console.log('success');
        navigate(`/profile/${userId}`);
      })
      .catch((error) => {
        console.log(formState);
        console.log(userId);
        console.error(error);
      });
  };

  return (
    <Card
      elevation={5}
      sx={{
        backgroundColor: '#hhh',
        mt: '3rem',
      }}
    >
      <CardContent>
        <Box component='form' onSubmit={handleSubmit}>
          <Typography variant='h6' component='h1'>
            Do you agree to the Terms and Conditions?
          </Typography>
          <FormControlLabel
            control={<Checkbox required value='agree' color='primary' />}
            label='I agree to the Terms and Conditions'
          />
          <Button
            variant='contained'
            onClick={prevStep}
            color='secondary'
            sx={{ mt: 2, textTransform: 'none' }}
          >
            Back
          </Button>
          <Button
            type='submit'
            variant='contained'
            sx={{ mt: 2, textTransform: 'none' }}
          >
            Submit
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};
