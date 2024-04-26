import React from 'react';
import { Typography, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import DescriptionIcon from '@mui/icons-material/Description';
import PortfolioIcon from '@mui/icons-material/PhotoLibrary';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { personalInfo, socialInfo } from '../data/personalData';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-sky-500 to-indigo-500 py-6">
            <div className="container mx-auto flex flex-col items-center justify-between space-y-2 md:space-y-0 md:flex-row md:justify-between">

                {/* Navigation links */}
                <div className="flex space-x-4">
                    <IconButton component={Link} to="/" className="text-white" title="Home">
                        <HomeIcon />
                    </IconButton>
                    <IconButton component={Link} to="/about" className="text-white" title="About">
                        <InfoIcon />
                    </IconButton>
                    <IconButton component={Link} to="/resume" className="text-white" title="Resume">
                        <DescriptionIcon />
                    </IconButton>
                    <IconButton component={Link} to="/portfolio" className="text-white" title="Portfolio">
                        <PortfolioIcon />
                    </IconButton>
                </div>


                {/* Copyright and back-to-top link */}
                <div className="flex space-x-4">
                    <Typography variant="body2" className="text-white">
                        &copy; 2024 Jason Yeung. All rights reserved.
                    </Typography>
                </div>

                {/* Contact and social media links */}
                <div className="flex space-x-4">
                    <IconButton href={`mailto:${personalInfo.email}`} className="text-white" title="Email">
                        <EmailIcon />
                    </IconButton>
                    <IconButton href={socialInfo.linkedin} target="_blank" className="text-white" title="LinkedIn">
                        <LinkedInIcon />
                    </IconButton>
                    <IconButton href={socialInfo.github} target="_blank" className="text-white" title="GitHub">
                        <GitHubIcon />
                    </IconButton>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
