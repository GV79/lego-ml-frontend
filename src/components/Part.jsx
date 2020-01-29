import React, { useState, useEffect } from 'react';
import { Grid, Card, CardContent, Typography } from '@material-ui/core';
import PartTotal from './PartTotal';
import useStyles from './PartStyles';

export default function Part({ data, partState, enabled, handleMaximumParts }) {
  const [count, setCount] = useState(0);
  const classes = useStyles();

  useEffect(() => {
    for (let item of partState.current) {
      if (item.id === data.partId) {
        item.num = count;
      }
    }
    handleMaximumParts();
  }, [data, partState, count, handleMaximumParts]);

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
            <a href={data.link}>INFO</a>
          </Button>
        </CardActions> */}
      </Card>
      <PartTotal count={count} setCount={setCount} enabled={enabled} />
    </Grid>
  );
}
