import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faLinkedin,
    faInstagram,
    faGithub,
    faTwitter,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const socialMedia = {
    linkedin: "https://www.linkedin.com/in/jason-yeung-027614218/",
    github: "https://github.com/ymkqut",
    facebook: "https://www.facebook.com",
    instagram: "https://www.instagram.com",
    twitter: "https://www.twitter.com",
    youtube: "https://www.youtube.com",
};

const SocialMediaLinks = () => {
    return (
        <div className="flex gap-4">
            <a href={socialMedia.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href={socialMedia.github} target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-900">
                <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href={socialMedia.facebook} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href={socialMedia.instagram} target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href={socialMedia.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href={socialMedia.youtube} target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-800">
                <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a>
        </div>
    );
};

export default SocialMediaLinks;
