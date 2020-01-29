import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import PartCounter from './PartCounter';

const useStyles = makeStyles({
  card: {
    textAlign: 'center',
    minWidth: 275,
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    margin: '2rem 2rem 0 2rem',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  image: {
    maxWidth: '5rem',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Part({ data }) {
  const [count, setCount] = React.useState(0);
  const classes = useStyles();
  return (
    <Grid container direction='column' justify='center' alignItems='center' style={{ width: 'auto' }}>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant='h5' component='h2'>
            {data.partName}
          </Typography>
          <Typography className={classes.pos} color='textSecondary'>
            UID: {data.partId}
          </Typography>
          <img src={data.partImage} alt='BrickOwl Lego Part' className={classes.image} />
        </CardContent>
        {/* <CardActions>
          <Button size='small' style={{ marginLeft: 'auto', color: '#24a3d4' }}>
            GET DIMENSIONS
          </Button>
        </CardActions> */}
      </Card>
      <PartCounter count={count} setCount={setCount} />
    </Grid>
  );
}
