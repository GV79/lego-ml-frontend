import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { set } from '../actions';
import { Button, Grid } from '@material-ui/core';
import BuildIcon from '@material-ui/icons/Build';
import Part from './Part';
import Search from './Search';
import SnackbarFactory from './SnackbarFactory';
import { sendData } from '../utils/utility';
import { MAX_PARTS } from '../configuration/config';
import { GENERATE_FAIL, GENERATE_SUCCESS } from '../utils/constants.js';
import data from '../resources/exampleData';
import useStyles from './HomepageBodyStyles';

// TO DO: Mobile media queries
export default function HomepageBody() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const partData = useSelector(state => state.part);
  const [partCountEnabled, setPartCountEnabled] = useState(true);
  const [generateStatus, setGenerateStatus] = useState(null);
  const partState = useRef([]); // [{ id: '', num: 0 }]

  useEffect(() => {
    for (let item of data) {
      partState.current = [...partState.current, { id: item.partId, num: 0 }];
    }

    new Image().src = 'images/empty.svg';
  }, []);

  const handleMaximumParts = () => {
    if (partState.current.length > 0) {
      let totalParts = partState.current.reduce((total, item) => {
        return total + item.num;
      }, 0);

      if (totalParts >= MAX_PARTS) {
        setPartCountEnabled(false);
      } else {
        if (!partCountEnabled) setPartCountEnabled(true);
      }
    }
  };

  const displaySnackbar = () => {
    if (generateStatus === GENERATE_FAIL) {
      return <SnackbarFactory type='error' message='Error sending data.' unmount={setGenerateStatus} />;
    } else if (generateStatus === GENERATE_SUCCESS) {
      return <SnackbarFactory type='success' message='Data sent successfully.' unmount={setGenerateStatus} />;
    } else {
      return <></>;
    }
  };

  const handleSendData = async () => {
    try {
      await sendData(partState.current);
      setGenerateStatus(GENERATE_SUCCESS);
    } catch (err) {
      setGenerateStatus(GENERATE_FAIL);
    }
  };

  const handleChange = event => {
    let partDataFiltered = data.map(item => {
      if (item.partName.toLowerCase().includes(event.target.value.toLowerCase())) {
        item.visible = true;
      } else {
        item.visible = false;
      }
      return item;
    });
    dispatch(set(partDataFiltered));
  };

  return (
    <>
      <Grid style={{ flexGrow: '1' }}>
        <Search handleChange={handleChange} />
        <Grid className={classes.partsBody} container direction='row' justify='center'>
          {partData.map((item, key) => {
            return (
              <Part
                style={{ marginTop: '2rem' }}
                data={item}
                key={key}
                partState={partState}
                enabled={partCountEnabled}
                handleMaximumParts={handleMaximumParts}
              />
            );
          })}
          {partData.filter(item => {
            return item.visible;
          }).length === 0 ? (
            <Grid container direction='column' justify='center' align='center'>
              <h3 style={{ color: '#ab8787' }}>No data found</h3>
              <img src='images/empty.svg' alt='no data found' className={classes.searchEmpty} />
            </Grid>
          ) : null}
        </Grid>
        <div style={{ bottom: 0, position: 'fixed', right: 0 }}>
          <Button variant='contained' color='secondary' className={classes.generateButton} onClick={handleSendData}>
            Generate <BuildIcon style={{ padding: '0.5rem 0rem 0.5rem 1rem' }} />
          </Button>
        </div>
      </Grid>
      {displaySnackbar()}
    </>
  );
}
