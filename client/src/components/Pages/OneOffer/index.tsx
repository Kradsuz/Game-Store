import React from 'react';
import { Box, Button, Card, Dialog, DialogActions, DialogContent, DialogTitle, Modal, Typography } from '@mui/material';

import type { DBOfferType } from '../../../types';
import Chat from '../Chat';
import { useAppDispatch, useAppSelector } from '../../../features/reduxHooks';
import { chatAction } from '../../../features/slices/dbSlice';

type OneOfferProps = {
  offer: DBOfferType;
};

// const useStyles = makeStyles({
//   root: {
//     display: 'flex',
//     // justifyContent: 'space-between',
//     marginBottom: 1,
//   },
// });

export default function OneOffer({offer}:OneOfferProps): JSX.Element {
  // const classes = useStyles();

  const dispatch = useAppDispatch()
  const handleClose = (): void => {
    dispatch(chatAction(false));
  };
  const modal = useAppSelector((state) => state.dbData.modal);
  const role =useAppSelector(state => state.userData.user?.roleId)

  const handleClickOpen = (data: string | false): void => {
    dispatch(chatAction(data));
  };

  return (
   <>
    <Modal open={!!modal} onClose={handleClose}>
      <Box>
        <Chat seller={modal}/>  
        <Button onClick={handleClose}>Close</Button>
      </Box>
    </Modal>
    
    
    
    
    
    
    <Card >
      <Typography gutterBottom variant="h5" component="h2" align="center">
            Seller: {offer.User?.username}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2" align="center">
            Price: {offer.price} $
          </Typography>
          <Typography gutterBottom variant="h5" component="h2" align="center">
            Conditions : {offer.time}, Platform: {offer.Platform?.name}
          </Typography>
          {role === 1 && <Button
                variant="outlined"
                onClick={() => handleClickOpen(offer.User?.username)}
                sx={{ marginTop: 1 }}
              >
                Chat with Seller
              </Button>}
    </Card>
   </>
  );
}
