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
import { socialInfo } from "../../data/personalData";

const SocialMediaLinks = () => {
    return (
        <div className="flex gap-4">
            <a href={socialInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href={socialInfo.github} target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-900">
                <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href={socialInfo.facebook} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href={socialInfo.instagram} target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href={socialInfo.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href={socialInfo.youtube} target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-800">
                <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a>
        </div>
    );
};

export default SocialMediaLinks;
