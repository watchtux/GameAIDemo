import * as React from 'react';
import Container from '@material-ui/core/Container';
import { Board } from '@/components/Board';

export class Game extends React.Component {
  public render() {
    return (
      <Container maxWidth='sm'>
        <Board />
      </Container>
    );
  }
}