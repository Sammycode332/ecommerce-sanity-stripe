import React from 'react';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div style={{ background: 'red', padding: '40px', color: 'white', zIndex: 9999 }}>
      <h1>If you can see this, React is working!</h1>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp