import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';

export default function AboutModal({ setShowAboutModal }) {
  const handleClose = () => {
    setShowAboutModal();
  };

  return (
    <div>
      <Dialog
        open={true}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>Welcome!</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            This web application was created to allow users to choose the number and types of bricks to be used as the
            input to our reinforcement learning environment. After choosing, click 'Generate' to send the data to our
            backend. Once loaded, the generated build will be demoed on the screen.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='primary' autoFocus>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
