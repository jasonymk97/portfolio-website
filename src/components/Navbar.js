import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Navbar = () => {
    const appBarRef = useRef(null);

    useEffect(() => {
        const appBarHeight = appBarRef.current.clientHeight;
        console.log('AppBar height:', appBarHeight);
        // You can use the appBarHeight value as needed
    }, []);

  return (
     <div ref={appBarRef} className=" top-0 w-full bg-gradient-to-r from-sky-500 to-indigo-500">
      <Toolbar className="justify-between">
        <Typography variant="h6" component="div"> 
          <Link to="/" className="text-white">Jason Yeung</Link>
        </Typography>
        <div className="space-x-4">
          <Link to="/" className="text-white">Home</Link>
          <Link to="/about" className="text-white">About</Link>
          <Link to="/resume" className="text-white">Resume</Link>
          <Link to="/portfolio" className="text-white">Portfolio</Link>
        </div>
      </Toolbar>
    </div>
  );
};

export default Navbar;
