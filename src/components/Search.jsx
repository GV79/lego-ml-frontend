import React from 'react';
import { Grid, TextField } from '@material-ui/core';
import FilterListIcon from '@material-ui/icons/FilterList';
import useStyles from './SearchStyles';

export default function Search({ handleChange }) {
  const classes = useStyles();
  return (
    <Grid className={classes.searchBody} container alignItems='center'>
      {/* <FormControl component='fieldset' className={classes.formControl}> */}
      {/* <FormLabel component='legend'>Filter Lego parts</FormLabel> */}
      <h2 className={classes.searchTitle}>Filter Lego Parts</h2>
      {/* <RadioGroup aria-label='Search by' name='searchBy' value={value} onChange={handleChange}>
        <FormControlLabel value='name' control={<Radio />} label='part name' />
        <FormControlLabel value='id' control={<Radio />} label='part number' />
      </RadioGroup> */}
      {/* </FormControl> */}
      <TextField
        id='outlined-search'
        label='Search by name...'
        type='search'
        variant='outlined'
        onChange={handleChange}
      />
      <FilterListIcon style={{ margin: '1rem', cursor: 'pointer' }} />
    </Grid>
  );
}
