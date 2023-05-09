import { Button, Container, TextField, Typography } from '@mui/material';

export const MyButton = ({ text, ...rest }) => (
  <Button
    type='submit'
    fullWidth
    variant='contained'
    sx={{ mt: 3, mb: 2, textTransform: 'none' }}
    {...rest}
  >
    {text}
  </Button>
);

export const MyTextField = ({ ...rest }) => (
  <TextField margin='normal' required fullWidth {...rest} />
);

export const MyContainer = ({ ...rest }) => (
  <Container maxWidth='sm' {...rest}></Container>
);

export const MyTypography = ({ text, ...rest }) => (
  <Typography sx={{}} {...rest}>
    {text}
  </Typography>
);
