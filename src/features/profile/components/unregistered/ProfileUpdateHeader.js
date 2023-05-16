// MUI
import { List, ListItemText, Paper, Typography, useTheme } from '@mui/material';
import { MyButton } from '../../../../lib/mui';

// React Router
import { useNavigate } from 'react-router-dom';

// Content
import {
  updateProfileHeader,
  updateProfileSubHeader,
  updateProfileBody,
  updateProfileList,
} from '../../../../data/content';

const ProfileUpdateHeader = ({ userId }) => {
  const theme = useTheme();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/profile/${userId}/update-profile`);
  };

  return (
    <Paper variant='outlined' sx={{ p: '1.5rem', bgcolor: '#eee' }}>
      <Typography variant='h6' sx={{ color: theme.palette.text.primary }}>
        {updateProfileHeader}
      </Typography>
      <Typography
        variant='body1'
        sx={{ color: theme.palette.text.secondary, py: 2 }}
      >
        {updateProfileSubHeader}
      </Typography>
      <Typography variant='body1' sx={{ color: theme.palette.text.primary }}>
        {updateProfileBody}
      </Typography>
      <List>
        {updateProfileList.map((item, key) => (
          <Typography variant='body2' key={key}>
            {item}
          </Typography>
        ))}
      </List>
      <MyButton fullWidth text='Update Profile' onClick={handleClick} />
    </Paper>
  );
};

export default ProfileUpdateHeader;
