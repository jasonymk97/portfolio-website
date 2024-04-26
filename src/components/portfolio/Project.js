import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Project = (props) => {
    const { title, description, linkText, link } = props;

    return (
        <React.Fragment>
            <div className="group bg-opacity-80 rounded-2xl h-full transition-opacity duration-300 hover:bg-gray-100 hover:opacity-100">
                <Link to={link} className="no-underline">
                    <div className="p-6">
                        <div className="w-8 flex justify-center items-center">
                            <FontAwesomeIcon icon={faGithub} className="text-2xl" />
                        </div>
                        <div className="pt-4 mb-4 text-lg font-bold" style={{ color: '#4A4A4A' }}>
                            {title}
                        </div>
                        <div className="text-gray-500">
                            {description}
                        </div>
                        <div className="flex items-center text-gray-500 text-xs pt-4 group-hover:text-blue-600 transition-colors duration-300">
                            <FontAwesomeIcon icon={faLink} className="ml-1" />
                            <div className="pl-5 font-bold">
                                {linkText}
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </React.Fragment>
    );
};

export default Project;
