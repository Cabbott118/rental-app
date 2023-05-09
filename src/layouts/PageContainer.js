import { Container } from '@mui/material';

const PageContainer = ({ ...rest }) => {
  return (
    <Container
      maxWidth='xs'
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
      {...rest}
    ></Container>
  );
};

export default PageContainer;
