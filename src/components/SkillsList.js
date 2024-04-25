import React from 'react';

// Import icon images
import bitbucketIcon from '../assets/images/icon_tech/bitbucket.png';
import githubIcon from '../assets/images/icon_tech/github.png';
import javascriptIcon from '../assets/images/icon_tech/javascript.png';
import phpIcon from '../assets/images/icon_tech/php.png';
import sourcetreeIcon from '../assets/images/icon_tech/sourcetree.png';
import bootstrapIcon from '../assets/images/icon_tech/bootstrap.png';
import gitlabIcon from '../assets/images/icon_tech/gitlab.png';
import mongodbIcon from '../assets/images/icon_tech/mongodb.png';
import postmanIcon from '../assets/images/icon_tech/postman.png';
import springIcon from '../assets/images/icon_tech/spring.png';
import cssIcon from '../assets/images/icon_tech/css-3.png';
import htmlIcon from '../assets/images/icon_tech/html-5.png';
import mysqlIcon from '../assets/images/icon_tech/mysql.png';
import pythonIcon from '../assets/images/icon_tech/python.png';
import vscodeIcon from '../assets/images/icon_tech/vscode.png';
import gitIcon from '../assets/images/icon_tech/git.png';
import javaIcon from '../assets/images/icon_tech/java.png';
import nodejsIcon from '../assets/images/icon_tech/nodejs.png';
import reactIcon from '../assets/images/icon_tech/react.png';

// Categorize the skills
const skillsCategories = {
    tools: [
        { name: 'Bitbucket', icon: bitbucketIcon },
        { name: 'GitHub', icon: githubIcon },
        { name: 'Sourcetree', icon: sourcetreeIcon },
        { name: 'GitLab', icon: gitlabIcon },
        { name: 'Postman', icon: postmanIcon },
        { name: 'VS Code', icon: vscodeIcon },
        { name: 'Git', icon: gitIcon }
    ],
    frontend: [
        { name: 'Bootstrap', icon: bootstrapIcon },
        { name: 'CSS', icon: cssIcon },
        { name: 'HTML', icon: htmlIcon },
        { name: 'JavaScript', icon: javascriptIcon },
        { name: 'React', icon: reactIcon }
    ],
    languages: [
        { name: 'PHP', icon: phpIcon },
        { name: 'Python', icon: pythonIcon },
        { name: 'Java', icon: javaIcon },
    ],
    databases: [
        { name: 'MongoDB', icon: mongodbIcon },
        { name: 'MySQL', icon: mysqlIcon }
    ],
    other: [
        { name: 'Spring', icon: springIcon },
        { name: 'Node.js', icon: nodejsIcon }
    ]
};

function SkillsList() {
    return (
        <div className="skills-list">
            {Object.entries(skillsCategories).map(([categoryName, skills]) => (
                <div key={categoryName} className="mb-8">
                    <h3 className="text-2xl font-bold mb-4">{categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}</h3>
                    <div className="grid grid-cols-3 gap-4">
                        {skills.map((skill) => (
                            <div key={skill.name} className="skill-item flex flex-col items-center">
                                <img src={skill.icon} alt={skill.name} className="w-12 h-12 mb-2" />
                                <span>{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default SkillsList;
