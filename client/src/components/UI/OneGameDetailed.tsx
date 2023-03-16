import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import type { IconButtonProps } from '@mui/material/IconButton';
import IconButton from '@mui/material/IconButton';
import DialogTitle from '@mui/material/DialogTitle';
import { useParams } from 'react-router-dom';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  styled,
  Typography,
} from '@mui/material';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '../../features/reduxHooks';
import { modalAction } from '../../features/slices/gamesSlice';
import type { GameType, PlatformsType } from '../../types';
import { getOffersThunkAction } from '../../features/actions/dbThunkActions';
import SellerOffers from '../Pages/SellerOffers';

export default function OneGameDetailed(): JSX.Element {
  const dispatch = useAppDispatch();
  const { id } = useParams();

  const game = useAppSelector((state) =>
    state.apiData.games.find((el) => el.id === Number(id)),
  );

  const user = useAppSelector((state) => state.userData.user);

  const modal = useAppSelector((state) => state.apiData.modal);

  const sellerData = useAppSelector((state) => state.dbData.gameOffers);

  const handleClickOpen = (data: GameType | false): void => {
    dispatch(modalAction(data));
  };

  type ExpandMoreProps = {
    expand: boolean;
  } & IconButtonProps;

  const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleClose = (): void => {
    dispatch(modalAction(false));
  };

  const handleOffers = (data: number): void => {
    dispatch(getOffersThunkAction(data)).catch(() => {});
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data: { [key: string]: string | File } = {};
    formData.forEach((value, key) => {
      data[key] = typeof value === 'string' ? value : value;
    });
    axios
      .post('/api/games/add', { data, game, user })
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
    handleClose();
    handleOffers(Number(id));
  };

  useEffect(() => {
    handleOffers(Number(id));
  }, []);

  return (
    <Container>
      <Card
        sx={{
          display: 'flex',
          maxWidth: 1200,
          maxHeight: 700,
          marginTop: 1,
          marginBottom: 1,
        }}
      >
        <CardMedia
          component="img"
          height="720"
          width="1280"
          image={`https://images.igdb.com/igdb/image/upload/t_720p/${
            game?.cover.image_id as string
          }.jpg`}
          alt="Game Image"
        />
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography gutterBottom variant="h5" component="div">
              {game?.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {game?.summary}
            </Typography>
          </CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
            {/* <Typography variant="h6" color="text.secondary">
            {game?.platforms}
          </Typography> */}
            {game && (
              <Button
                variant="outlined"
                onClick={() => handleClickOpen(game)}
                sx={{ marginTop: 1 }}
              >
                Add new Offer
              </Button>
            )}
          </Box>
        </Box>
      </Card>

      <Dialog open={!!modal} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <form id="my-form" onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">
                Platform
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="platform"
              >
                {game?.platforms.map((platform: PlatformsType) => (
                  <FormControlLabel
                    value={platform?.abbreviation}
                    control={<Radio />}
                    label={platform?.abbreviation}
                    key={platform.id}
                  />
                ))}
              </RadioGroup>
              <TextField
                autoFocus
                margin="dense"
                name="price"
                label="Enter your price in $"
                type="number"
                fullWidth
              />
              <TextField
                name="conditions"
                label="Conditions"
                multiline
                maxRows={3}
              />
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" form="my-form">
            Add
          </Button>
        </DialogActions>
      </Dialog>
      <SellerOffers sellerData={sellerData} />
    </Container>
  );
}
