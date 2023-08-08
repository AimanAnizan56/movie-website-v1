import { useRouteError } from 'react-router-dom';
import styled from '@emotion/styled';

export default function ErrorPage() {
  type Error = {
    statusText: string;
    message: string;
  };
  const error: Error = useRouteError() as Error;

  const Container = styled.div`
    display: flex;
    height: 90vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;
  const Header = styled.h1``;
  const Text = styled.p``;
  const Message = styled.p`
    i {
    }
  `;

  return (
    <Container id="error-page">
      <Header>Oops!</Header>
      <Text>Sorry, an unexpected error has occurred.</Text>
      <Message>
        <i>{error.statusText || error.message}</i>
      </Message>
    </Container>
  );
}
