import React from 'react';
import NavbarGeneral from './NavbarGeneral/NavbarGeneral';

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <NavbarGeneral />
      </div>
      <main>{children}</main>
    </>
  )
}

export default Layout;