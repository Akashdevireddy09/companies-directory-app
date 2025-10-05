
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
      {company.domain && (
        <button 
          onClick={handleVisit}
          className="visit-btn"
        >
          Visit Website
        </button>
      )}
      {!company.domain && (
        <button 
          onClick={handleVisit}
          className="visit-btn disabled"
          disabled
        >
          No Website
        </button>
      )}
    </div>
  );
};

export default CompanyCard;
