import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function AboutModal({ setShowAboutModal }) {
  const handleClose = () => {
    setShowAboutModal(false);
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
