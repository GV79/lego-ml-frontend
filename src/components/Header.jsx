import React from 'react';
import AboutModal from './AboutModal';
import InfoIcon from '@material-ui/icons/Info';
import GitHubIcon from '@material-ui/icons/GitHub';
import { useDispatch, useSelector } from 'react-redux';
import { display } from '../actions';
import styles from './HeaderStyles';

export default function Header() {
  const displayAboutModal = useSelector(state => state.aboutModal);
  const dispatch = useDispatch();

  const handleLink = () => {
    window.open('https://github.com/GV79/lego-ml-frontend', '_newtab');
  };

  return (
    <>
      <div style={styles.header}>
        <div style={{ color: '#e6e6e6' }}>
          Lego <span style={{ color: '#440c0c' }}>ML Model Data Loader</span>
        </div>
        <div style={styles.about}>
          <InfoIcon style={{ fontSize: '2.5rem' }} onClick={() => dispatch(display(true))} />
          <GitHubIcon style={{ marginLeft: '0.3rem', fontSize: '2rem' }} onClick={handleLink} />
        </div>
      </div>
      {displayAboutModal && <AboutModal setShowAboutModal={() => dispatch(display(false))} />}
    </>
  );
}
