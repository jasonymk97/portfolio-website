import React from 'react';
import Header from './Header';
import Footer from './Footer';

function MainLayout({ children }) {
  return (
      <><Header /><main style={{ flex: '1' }}>{children}</main><Footer /></>
  );
}

export default MainLayout;
