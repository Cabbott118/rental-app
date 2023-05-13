// MUI
import { useTheme } from '@mui/material';
import { Grid, Typography } from '@mui/material';

const ProfileUpdateHeader = () => {
  const theme = useTheme();

  return (
    <>
      <Typography variant='h6' sx={{ color: theme.palette.text.primary }}>
        Add some details to your profile
      </Typography>
      <Typography
        variant='body1'
        sx={{ color: theme.palette.text.secondary, py: 2 }}
      >
        If you don't mind, give us a bit more information aboout yourself.
      </Typography>
    </>
  );
};

export default ProfileUpdateHeader;
