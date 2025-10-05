
import React from 'react';
import { notifications } from '../utils/notifications';

const CompanyCard = ({ company }) => {
  const handleVisit = () => {
    if (company.domain) {
      const url = company.domain.startsWith('http') 
        ? company.domain 
        : `https://${company.domain}`;
      notifications.company.visited(company.name);
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      notifications.company.noWebsite(company.name);
    }
  };

  const handleCareerPageVisit = () => {
    if (company.careerPage) {
      notifications.success(`Opening ${company.name} careers page...`);
      window.open(company.careerPage, '_blank', 'noopener,noreferrer');
    } else {
      notifications.warning(`${company.name} doesn't have a careers page available`);
    }
  };

  return (
    <div className="company-card">
      <img 
        src={`https://logo.clearbit.com/${company.domain}`} 
        alt={`${company.name} Logo`} 
        className="company-logo"
        onError={(e) => { e.target.onerror = null; e.target.src=`https://placehold.co/100x100/4a4a4a/ffffff?text=${company.name.charAt(0)}`; }}
      />
      <h3 className="company-name">{company.name}</h3>
      <p className="company-industry">{company.industry}</p>
      <p className="company-location">{company.location}</p>
      
      {/* Founded Year with low priority appearance */}
      {company.foundedYear && (
        <p className="company-founded-year">Est. {company.foundedYear}</p>
      )}
      
      {/* Button container for proper layout */}
      <div className="button-container">
        {company.domain && (
          <button 
            onClick={handleVisit}
            className="visit-btn"
            title={`Visit ${company.name} website`}
          >
            Visit Website
          </button>
        )}
        
        {company.careerPage && (
          <button 
            onClick={handleCareerPageVisit}
            className="career-btn"
            title={`View careers at ${company.name}`}
          >
            Careers
          </button>
        )}
        
        {!company.domain && !company.careerPage && (
          <button 
            className="visit-btn disabled"
            disabled
            title="No website or careers page available"
          >
            No Links Available
          </button>
        )}
      </div>
    </div>
  );
};

export default CompanyCard;
