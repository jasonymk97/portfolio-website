import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';

const NotFoundPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Header at the top */}
            <Header />
            
            {/* Middle content */}
            <div className="flex-grow flex flex-col items-center justify-center bg-gray-100">
                <Typography variant="h2" component="h1" className="text-4xl font-bold mb-4 text-red-500">
                    404
                </Typography>
                <Typography variant="h6" component="p" className="mb-6 text-gray-700">
                    Page not found
                </Typography>
                <Button variant="contained" color="primary" component={Link} to="/" className="rounded">
                    Go Back Home
                </Button>
            </div>
            
            {/* Footer at the bottom */}
            <Footer />
        </div>
    );
};

export default NotFoundPage;
