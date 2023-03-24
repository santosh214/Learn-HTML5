import Head from 'next/head';
import React from 'react';
import Footer from '../Common/Footer';
import Navbar from '../Common/Navbar';

export default function Layout({ children }) {
  return (
    <>
      {' '}
      <Navbar />
      <main>{children} </main>
      {/* <Footer /> */}
    </>
  );
}
