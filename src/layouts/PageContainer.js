import { Container } from '@mui/material';

const PageContainer = ({ ...rest }) => {
  return (
    <Container
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '80vh',
      }}
      {...rest}
    ></Container>
  );
};

export default PageContainer;
