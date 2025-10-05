import React, { useState, useEffect, useMemo } from 'react';
import companiesData from './companies.json';

// Import the separated components
import FilterControls from './components/FilterControls';
import CompanyList from './components/CompanyList';
import { LoadingSpinner } from './components/StatusIndicators';
import { ErrorMessage } from './components/StatusIndicators';

function App() {
  // --- State Management ---
  const [allCompanies, setAllCompanies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const [filters, setFilters] = useState({
    searchTerm: '',
    industry: '',
    location: '',
    sortBy: 'name-asc',
  });

  // --- Data Fetching ---
  useEffect(() => {
    const fetchData = () => {
      try {
        setTimeout(() => {
          setAllCompanies(companiesData);
          setIsLoading(false);
        }, 1000);
      } catch (err) {
        setError('Failed to fetch company data.');
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  // --- Derived State & Logic ---
  const uniqueIndustries = useMemo(() => [...new Set(allCompanies.map(c => c.industry))], [allCompanies]);
  const uniqueLocations = useMemo(() => [...new Set(allCompanies.map(c => c.location))], [allCompanies]);

  const filteredAndSortedCompanies = useMemo(() => {
    let result = [...allCompanies];

    result = result.filter(company => {
      const nameMatch = company.name.toLowerCase().includes(filters.searchTerm.toLowerCase());
      const industryMatch = filters.industry ? company.industry === filters.industry : true;
      const locationMatch = filters.location ? company.location === filters.location : true;
      return nameMatch && industryMatch && locationMatch;
    });

    result.sort((a, b) => {
      if (filters.sortBy === 'name-asc') {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });

    return result;
  }, [allCompanies, filters]);

  // --- Rendering ---
  return (
    <div className="App">
      <header className="app-header">
        <h1>Company Directory</h1>
        <p>Find and filter companies from our curated list.</p>
      </header>
      <main>
        <FilterControls 
          filters={filters} 
          setFilters={setFilters} 
          industries={uniqueIndustries} 
          locations={uniqueLocations}
        />
        {isLoading && <LoadingSpinner />}
        {error && <ErrorMessage message={error} />}
        {!isLoading && !error && <CompanyList companies={filteredAndSortedCompanies} />}
      </main>
      <footer className="app-footer">
        <p>Built by Akash Devireddy</p>
      </footer>
    </div>
  );
}

export default App;

