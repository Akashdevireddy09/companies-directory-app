// import React from 'react';

// const CompanyCard = ({ company }) => {
//   return (
//     <div className="company-card">
//       <h3>{company.name}</h3>
//       <p>{company.description}</p>
//       <div className="company-details">
//         <span className="industry">{company.industry}</span>
//         <span className="location">{company.location}</span>
//       </div>
//     </div>
//   );
// };

// export default CompanyCard;

import React from 'react';

const CompanyCard = ({ company }) => {
  const handleVisit = () => {
    if (company.domain) {
      const url = company.domain.startsWith('http') 
        ? company.website 
        : `https://${company.domain}`;
      window.open(url, '_blank', 'noopener,noreferrer');
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
        <a 
      href={`https://${company.domain}`} 
      target="_blank" 
      rel="noopener noreferrer"
      className="visit-btn"
    >
      Visit Website
    </a>
      )}
    </div>
  );
};

export default CompanyCard;
