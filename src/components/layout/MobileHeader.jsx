import React from 'react';
import { personalInfo } from '../../utils/constants';

const MobileHeader = () => {
  return (
    <div className="lg:hidden bg-card-bg p-4 flex items-center space-x-4">
      {/* Profile Image */}
      <div className="w-12 h-12 bg-primary-bg rounded-full overflow-hidden flex-shrink-0">
        <img
          src={personalInfo.avatar}
          alt={personalInfo.name}
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Name and Role */}
      <div className="flex-1">
        <h1 className="text-lg font-bold text-primary-text">
          {personalInfo.name}
        </h1>
        <p className="text-sm text-accent-yellow">
          {personalInfo.role}
        </p>
      </div>
      
      {/* Social Links */}
      <div className="flex space-x-2">
        {personalInfo.socials.slice(0, 2).map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 bg-primary-bg rounded-lg flex items-center justify-center text-accent-yellow hover:bg-accent-yellow hover:text-primary-bg transition-colors duration-300"
          >
            <span className="text-xs font-bold">
              {social.name.substring(0, 2)}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default MobileHeader;
