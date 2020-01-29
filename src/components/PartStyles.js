import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
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

export default useStyles;
