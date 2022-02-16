import {
  Box,
  Divider,
  Link,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from '@mui/material';
import { Page, AppPageProps } from 'app/pages/Page';
import * as React from 'react';
import styled from 'styled-components';

export function AboutPage(props: AppPageProps) {
  return (
    <Page {...props}>
      <Box sx={{ py: 2 }}>
        <Typography variant="h2" gutterBottom>
          About the Game
        </Typography>
        <Info>
          {/* <Typography variant="h5" gutterBottom>
            abc
          </Typography> */}
          <Typography variant="body1">
            Orbital Δ is a game about automating rocket launches, completing
            contracts and discovering the universe.
            <br />
          </Typography>
        </Info>
        <Info>
          <Typography variant="h4" gutterBottom>
            Inspiration
          </Typography>
          <Typography variant="body1">
            This game has been heavily inspired by{' '}
            <Link
              href="https://store.steampowered.com/app/220200/Kerbal_Space_Program/"
              rel="nofollow"
              target="_blank"
            >
              Kerbal Space Program
            </Link>{' '}
            & by{' '}
            <Link
              href="https://github.com/danielyxie/bitburner"
              rel="nofollow"
              target="_blank"
            >
              Bitburner
            </Link>
            .
          </Typography>
          <Divider sx={{ my: 2 }} />
          <Typography variant="h5" gutterBottom>
            Third Party Credit
          </Typography>
          <Typography variant="body1">Lorem Ipsum</Typography>
          <Divider sx={{ my: 2 }} />
          <Typography variant="h6" gutterBottom>
            Tech
          </Typography>
          <Typography variant="body2">
            The game is built and is using:
          </Typography>
          <List dense>
            <ListItem>
              <ListItemText>React.js</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Typescript</ListItemText>
            </ListItem>
          </List>
        </Info>
      </Box>
    </Page>
  );
}

const Info = styled(Paper)`
  margin-bottom: ${props => props.theme.spacing(2)};
  padding: ${props => props.theme.spacing(2)};
  background-color: ${props => props.theme.palette.bg.light};
  max-width: 600px;
`;
