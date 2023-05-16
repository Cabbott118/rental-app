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

// React-Router
import { useNavigate } from 'react-router-dom';

// Functions
import { updateUserDetails } from '../functions/users/updateUserDetails';

// Utility
import states from '../utility/states.json';

export const Form1 = ({ data, setData, nextStep }) => {
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
            id='firstName'
            label='First Name'
            name='firstName'
            value={data.firstName}
            onChange={(e) => setData({ ...data, firstName: e.target.value })}
            autoFocus
          />
          <TextField
            margin='normal'
            required
            fullWidth
            id='lastName'
            label='Last Name'
            name='lastName'
            value={data.lastName}
            onChange={(e) => setData({ ...data, lastName: e.target.value })}
          />
          <Typography variant='caption'>When were you born? </Typography>
          <TextField
            sx={{ mb: 1 }}
            required
            fullWidth
            id='dateOfBirth'
            name='dateOfBirth'
            type='date'
            value={data.dateOfBirth}
            onChange={(e) => setData({ ...data, dateOfBirth: e.target.value })}
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
            value={data.phoneNumber}
            onChange={(e) => setData({ ...data, phoneNumber: e.target.value })}
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

export const Form2 = ({ data, setData, prevStep, nextStep }) => {
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
            value={data.address.addressLineOne}
            onChange={(e) =>
              setData({
                ...data,
                address: {
                  ...data.address,
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
            value={data.address.city}
            onChange={(e) =>
              setData({
                ...data,
                address: {
                  ...data.address,
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
            value={data.address.state}
            onChange={(e) =>
              setData({
                ...data,
                address: {
                  ...data.address,
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
            value={data.address.zipCode}
            onChange={(e) =>
              setData({
                ...data,
                address: {
                  ...data.address,
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

export const Form3 = ({ data, userId, setData, prevStep }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateUserDetails(userId, data);
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
