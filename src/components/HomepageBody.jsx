import React, { useEffect, useState, useRef } from 'react';
import { Grid } from '@material-ui/core';
import Part from './Part';
import Button from '@material-ui/core/Button';
import BuildIcon from '@material-ui/icons/Build';
import useStyles from './HomepageBodyStyles';
import data from '../resources/exampleData';
import { sendData } from '../utils/utility';
import Search from './Search';
import SnackbarFactory from './SnackbarFactory';
import { MAX_PARTS } from '../configuration/config';
import { GENERATE_FAIL, GENERATE_SUCCESS } from '../utils/constants.js';

// TO DO: Mobile media queries
export default function HomepageBody() {
  const classes = useStyles();
  const [partData, setPartData] = useState(data);
  const [partCountEnabled, setPartCountEnabled] = useState(true);
  const [generateStatus, setGenerateStatus] = useState(null);
  const partState = useRef([]); // [{ id: '', num: 0 }]

  useEffect(() => {
    for (let item of partData) {
      partState.current = [...partState.current, { id: item.partId, num: 0 }];
    }
  }, [partData]);

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

  const handleSendData = () => {
    try {
      sendData(partState.current);
      setGenerateStatus(GENERATE_SUCCESS);
    } catch (err) {
      setGenerateStatus(GENERATE_FAIL);
    }
  };

  const handleChange = event => {
    let dataSubset = data.filter(item => {
      return item.partName.toLowerCase().includes(event.target.value.toLowerCase());
    });
    setPartData(dataSubset);
  };

  return (
    <>
      <Grid style={{ flexGrow: '1' }}>
        <Search handleChange={handleChange} />
        <Grid className={classes.partsBody} container direction='row' justify='space-around'>
          {partData.length > 0 ? (
            partData.map((item, key) => {
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
            })
          ) : (
            <Grid container direction='column' justify='center' align='center'>
              <h3 style={{ color: '#ab8787' }}>No data found</h3>
              <img src='/empty.svg' alt='no data found' style={{ width: '40%', maxWidth: '30rem', height: 'auto' }} />
            </Grid>
          )}
        </Grid>
        <div style={{ bottom: 0, position: 'fixed', right: 0 }}>
          <Button
            variant='contained'
            color='secondary'
            style={{ margin: '1rem', marginLeft: 'auto', width: '12rem' }}
            onClick={handleSendData}
          >
            Generate <BuildIcon style={{ padding: '0.5rem 0rem 0.5rem 1rem' }} />
          </Button>
        </div>
      </Grid>
      {displaySnackbar()}
    </>
  );
}
