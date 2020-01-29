import React, { useState } from 'react';
import styles from './HeaderStyles';
import InfoIcon from '@material-ui/icons/Info';
import AboutModal from './AboutModal';

export default function Header() {
  const [showAboutModal, setShowAboutModal] = useState(false);

  const displayModal = () => {
    setShowAboutModal(true);
  };

  return (
    <>
      <div style={styles.header}>
        <div style={{ color: '#e6e6e6' }}>
          Lego <span style={{ color: '#440c0c' }}>ML Model Data Loader</span>
        </div>
        <div style={styles.about}>
          <InfoIcon style={{ fontSize: '2.5rem' }} onClick={displayModal} />
        </div>
      </div>
      {showAboutModal ? <AboutModal setShowAboutModal={setShowAboutModal} /> : null}
    </>
  );
}
