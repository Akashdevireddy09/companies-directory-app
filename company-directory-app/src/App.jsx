import React, { useState, useEffect } from 'react';
import CompanyList from './components/CompanyList';
import FilterControls from './components/FilterControls';
import { LoadingSpinner, ErrorMessage } from './components/StatusIndicators';
import Pagination from './components/Pagination'; // --- Import the new component
import allCompanies from './companies.json';

const App = () => {
  const [companies, setCompanies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [industryFilter, setIndustryFilter] = useState('');

  // --- New State for Pagination ---
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(9); // Show 6 companies per page

  useEffect(() => {
    // Simulate API call
    const fetchData = () => {
      try {
        setIsLoading(true);
        // Simulate network delay
        setTimeout(() => {
          setCompanies(allCompanies);
          setIsLoading(false);
        }, 1000);
      } catch (err) {
        setError('Failed to fetch company data.');
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  // --- Filter Logic ---
  const filteredCompanies = companies.filter(company => {
    return (
      company.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (locationFilter === '' || company.location === locationFilter) &&
      (industryFilter === '' || company.industry === industryFilter)
    );
  });

  // --- Reset to page 1 when filters change ---
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, locationFilter, industryFilter]);

  // --- Pagination Calculation ---
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCompanies = filteredCompanies.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredCompanies.length / itemsPerPage);

  const uniqueLocations = [...new Set(companies.map(c => c.location))];
  const uniqueIndustries = [...new Set(companies.map(c => c.industry))];

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Company Directory</h1>
        <p>Find and explore companies from various industries.</p>
      </header>
      <FilterControls
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        locationFilter={locationFilter}
        setLocationFilter={setLocationFilter}
        industryFilter={industryFilter}
        setIndustryFilter={setIndustryFilter}
        locations={uniqueLocations}
        industries={uniqueIndustries}
      />
      {isLoading && <LoadingSpinner />}
      {error && <ErrorMessage message={error} />}
      {!isLoading && !error && (
        <>
          <CompanyList companies={currentCompanies} /> 
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </>
      )}
    </div>
  );
};

export default App;

