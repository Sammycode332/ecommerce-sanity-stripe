import React from 'react';
import '../app/globals.css';
import { Layout } from '../components'; // 👈 1. Import Layout
import { StateContext } from '../context/StateContext';
import { Toaster } from 'react-hot-toast'
function MyApp({ Component, pageProps }) {
  return (
   <StateContext>
     <Layout>
      <Toaster />
      <Component {...pageProps} />
    </Layout>
   </StateContext>
   
  );
}

export default MyApp;