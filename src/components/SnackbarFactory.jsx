import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const Alert = props => {
  return <MuiAlert elevation={6} variant='filled' {...props} />;
};

/*
 * Component that takes in 3 parameters and generates a snackbar at the bottom
 * type: 'error', 'success'... etc.
 * message: 'message to be displayed to user'
 * unmount: function to unmount component from DOM
 */
export default function SnackbarFactory({ type, message, unmount }) {
  const [open, setOpen] = React.useState(true);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
    unmount();
  };

  return (
    <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={type}>
        {message}
      </Alert>
    </Snackbar>
  );
}
