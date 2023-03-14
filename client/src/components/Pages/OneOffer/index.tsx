import React from 'react';
import { useDispatch } from 'react-redux';
import  makeStyles  from '@mui/styled-engine';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteCard } from '../actions/cards';
import type { DBOfferType, GameType } from '../../../types';

type OneOfferProps = {
  offer: DBOfferType;
};

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  media: {
    width: 300,
    height: 200,
  },
  actions: {
    display: 'flex',
    alignItems: 'center',
  },
});

export default function OneOffer({offer}:OneOfferProps): JSX.Element {
  const classes = useStyles();
  const dispatch = useDispatch();


 

  return (
    <Card className={classes.root}>
      <CardActionArea>

        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" align="center">
            {offer.price}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2" align="center">
            {offer.time}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
