import React from 'react';
import Header from '../components/Header';
import '../App.css';
import HomepageBody from '../components/HomepageBody';

export default function Homepage() {
  return (
    <div className='App'>
      <Header />
      <HomepageBody />
    </div>
  );
}
