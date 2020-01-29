import React from 'react';
import Header from '../components/Header';
import HomepageBody from '../components/HomepageBody';
import '../App.css';

export default function Homepage() {
  return (
    <div className='App'>
      <Header />
      <HomepageBody />
    </div>
  );
}
