import { Container } from '@mui/material';

const PageContainer = ({ ...rest }) => {
  return <Container maxWidth='sm' {...rest}></Container>;
};

export default PageContainer;
