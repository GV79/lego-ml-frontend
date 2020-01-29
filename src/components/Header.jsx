import React, { useState } from 'react';
import AboutModal from './AboutModal';
import InfoIcon from '@material-ui/icons/Info';
import GitHubIcon from '@material-ui/icons/GitHub';
import styles from './HeaderStyles';

export default function Header() {
  const [showAboutModal, setShowAboutModal] = useState(false);

  const displayModal = () => {
    setShowAboutModal(true);
  };

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
          <InfoIcon style={{ fontSize: '2.5rem' }} onClick={displayModal} />
          <GitHubIcon style={{ marginLeft: '0.3rem', fontSize: '2rem' }} onClick={handleLink} />
        </div>
      </div>
      {showAboutModal ? <AboutModal setShowAboutModal={setShowAboutModal} /> : null}
    </>
  );
}
