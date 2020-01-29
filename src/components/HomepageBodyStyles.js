import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  generateButton: {
    margin: '1rem',
    marginLeft: 'auto',
    width: '12rem',
  },
  partsBody: {
    marginBottom: '5rem',
    flex: '5',
  },
  searchEmpty: {
    height: 'auto',
    width: '40%',
    maxWidth: '30rem',
  },
}));

export default useStyles;
