import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
}));

export default function PartTotal({ count, setCount, enabled }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div>
          <h2 style={{ margin: '1rem', color: '#505e7d' }}>{count}</h2>
        </div>
        <ButtonGroup>
          <Button
            aria-label='reduce'
            onClick={() => {
              setCount(Math.max(count - 1, 0));
            }}
          >
            <RemoveIcon fontSize='small' />
          </Button>
          <Button
            aria-label='increase'
            onClick={() => {
              setCount(count + 1);
            }}
            disabled={enabled ? false : true}
          >
            <AddIcon fontSize='small' />
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
}
