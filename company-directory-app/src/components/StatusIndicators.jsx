// import React from 'react';

// const StatusIndicators = ({ totalCompanies, filteredCount, loading, error }) => {
//   if (error) {
//     return (
//       <div className="status-indicators error">
//         <span className="error-message">Error: {error}</span>
//       </div>
//     );
//   }

//   if (loading) {
//     return (
//       <div className="status-indicators loading">
//         <span className="loading-text">Loading...</span>
//       </div>
//     );
//   }

//   return (
//     <div className="status-indicators">
//       <span className="company-count">
//         Showing {filteredCount} of {totalCompanies} companies
//       </span>
//     </div>
//   );
// };

// export default StatusIndicators;

import React from 'react';

export const LoadingSpinner = () => (
  <div className="spinner-container">
    <div className="spinner"></div>
    <p>Loading companies...</p>
  </div>
);

export const ErrorMessage = ({ message }) => (
  <div className="error-container">
    <p>Error: {message}</p>
  </div>
);
