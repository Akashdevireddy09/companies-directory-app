// import React from 'react';

// const FilterControls = ({ 
//   searchTerm, 
//   onSearchChange, 
//   selectedIndustry, 
//   onIndustryChange, 
//   industries 
// }) => {
//   return (
//     <div className="filter-controls">
//       <div className="search-box">
//         <input
//           type="text"
//           placeholder="Search companies..."
//           value={searchTerm}
//           onChange={(e) => onSearchChange(e.target.value)}
//           className="search-input"
//         />
//       </div>
      
//       <div className="filter-dropdown">
//         <select
//           value={selectedIndustry}
//           onChange={(e) => onIndustryChange(e.target.value)}
//           className="industry-select"
//         >
//           <option value="">All Industries</option>
//           {industries.map((industry) => (
//             <option key={industry} value={industry}>
//               {industry}
//             </option>
//           ))}
//         </select>
//       </div>
//     </div>
//   );
// };

// export default FilterControls;

import React from 'react';
import { notifications } from '../utils/notifications';

const FilterControls = ({
  searchTerm,
  setSearchTerm,
  industryFilter,
  setIndustryFilter,
  locationFilter,
  setLocationFilter,
  industries,
  locations
}) => {
  const clearAllFilters = () => {
    setSearchTerm('');
    setIndustryFilter('');
    setLocationFilter('');
    notifications.filter.cleared();
  };
  
  const hasActiveFilters = searchTerm || industryFilter || locationFilter;
  return (
    <div className="filter-controls">
      <input
        type="text"
        name="searchTerm"
        placeholder="Search by company name..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <div className="dropdowns">
        <select name="industry" value={industryFilter} onChange={e => setIndustryFilter(e.target.value)}>
          <option value="">All Industries</option>
          {industries.map(industry => <option key={industry} value={industry}>{industry}</option>)}
        </select>
        <select name="location" value={locationFilter} onChange={e => setLocationFilter(e.target.value)}>
          <option value="">All Locations</option>
          {locations.map(loc => <option key={loc} value={loc}>{loc}</option>)}
        </select>
        {hasActiveFilters && (
          <button onClick={clearAllFilters} className="clear-filters-btn">
            Clear Filters
          </button>
        )}
      </div>
    </div>
  );
};

export default FilterControls;
