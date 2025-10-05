// import React from 'react';
// import CompanyCard from './CompanyCard';

// const CompanyList = ({ companies, loading }) => {
//   if (loading) {
//     return <div className="loading">Loading companies...</div>;
//   }

//   if (!companies || companies.length === 0) {
//     return <div className="no-companies">No companies found.</div>;
//   }

//   return (
//     <div className="company-list">
//       {companies.map((company) => (
//         <CompanyCard key={company.id} company={company} />
//       ))}
//     </div>
//   );
// };

// export default CompanyList;


import React from 'react';
import CompanyCard from './CompanyCard';

const CompanyList = ({ companies }) => {
  if (companies.length === 0) {
    return <p className="no-results">No companies match the current filters.</p>;
  }

  return (
    <div className="company-grid">
      {companies.map(company => <CompanyCard key={company.id} company={company} />)}
    </div>
  );
};

export default CompanyList;
