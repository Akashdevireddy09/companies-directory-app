import React, { useState, useEffect } from 'react';
import CompanyList from './components/CompanyList';
import FilterControls from './components/FilterControls';
import { LoadingSpinner, ErrorMessage } from './components/StatusIndicators';
import Pagination from './components/Pagination'; // --- Import the new component
import allCompanies from './companies.json';
import { notifications } from './utils/notifications';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [companies, setCompanies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [industryFilter, setIndustryFilter] = useState('');

  // --- New State for Pagination ---
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8); // Show 6 companies per page

  useEffect(() => {
    // Simulate API call
    const fetchData = () => {
      try {
        setIsLoading(true);
        const loadingToastId = notifications.data.loading();
        
        // Simulate network delay
        setTimeout(() => {
          setCompanies(allCompanies);
          setIsLoading(false);
          notifications.updateLoading(loadingToastId, `Successfully loaded ${allCompanies.length} companies`, 'success');
        }, 1000);
      } catch (err) {
        setError('Failed to fetch company data.');
        setIsLoading(false);
        notifications.data.error(err);
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
    
    // Show filter notifications
    if (searchTerm && searchTerm.length > 0) {
      notifications.filter.applied('search', searchTerm);
    }
    if (industryFilter) {
      notifications.filter.applied('industry', industryFilter);
    }
    if (locationFilter) {
      notifications.filter.applied('location', locationFilter);
    }
  }, [searchTerm, locationFilter, industryFilter]);
  
  // Check for no results and show notification
  useEffect(() => {
    if (!isLoading && filteredCompanies.length === 0 && companies.length > 0) {
      notifications.filter.noResults(searchTerm);
    }
  }, [filteredCompanies, isLoading, companies, searchTerm]);

  // Handle page change with notification
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    notifications.pagination.pageChanged(newPage, totalPages);
  };
  
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
        <div className="header-content">
          <img src="/logo.png" alt="Company Directory Logo" className="app-logo" />
          <div className="header-text">
            <h1>Company Directory</h1>
            <p>Find and explore companies from various industries.</p>
          </div>
        </div>
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
            onPageChange={handlePageChange}
          />
        </>
      )}
      
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default App;

