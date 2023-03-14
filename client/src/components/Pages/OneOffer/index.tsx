import React from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { deleteCard } from '../actions/cards';
import type { GameType } from '../../../types';

type OneOfferProps = {
  game: GameType;
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

export default function OneOffer({ game }: OneOfferProps): JSX.Element {
  const dispatch = useDispatch();

  const handleEdit = () => {
    // Implement edit functionality here
  };

  const handleDelete = () => {
    dispatch(deleteCard(game.id));
  };

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={`https://images.igdb.com/igdb/image/upload/t_cover_big/${game?.cover?.image_id}.jpg`}
          title={game.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" align="center">
            {game.name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <div className={classes.actions}>
        <IconButton onClick={handleEdit}>
          <EditIcon />
        </IconButton>
        <IconButton onClick={handleDelete}>
          <DeleteIcon />
        </IconButton>
      </div>
    </Card>
  );
}
