import { toast } from 'react-toastify';

// Notification utility functions
export const notifications = {
  // Success notifications
  success: (message, options = {}) => {
    toast.success(message, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      ...options,
    });
  },

  // Error notifications
  error: (message, options = {}) => {
    toast.error(message, {
      position: "top-center",
      autoClose: 5000, // Show errors longer
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      ...options,
    });
  },

  // Info notifications
  info: (message, options = {}) => {
    toast.info(message, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      ...options,
    });
  },

  // Warning notifications
  warning: (message, options = {}) => {
    toast.warning(message, {
      position: "top-center",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      ...options,
    });
  },

  // Loading notification (can be dismissed manually)
  loading: (message, options = {}) => {
    return toast.loading(message, {
      position: "top-center",
      closeOnClick: true,
      ...options,
    });
  },

  // Update loading notification
  updateLoading: (toastId, message, type = 'success') => {
    toast.update(toastId, {
      render: message,
      type: type,
      isLoading: false,
      autoClose: 3000,
    });
  },

  // Dismiss specific toast
  dismiss: (toastId) => {
    toast.dismiss(toastId);
  },

  // Clear all notifications
  clearAll: () => {
    toast.dismiss();
  },

  // Company-specific notifications
  company: {
    visited: (companyName) => {
      notifications.success(`Opening ${companyName} website...`, {
        autoClose: 2000,
      });
    },

    noWebsite: (companyName) => {
      notifications.warning(`${companyName} doesn't have a website URL available`, {
        autoClose: 4000,
      });
    },
  },

  // Filter-specific notifications
  filter: {
    applied: (filterType, value) => {
      notifications.info(`Filtered by ${filterType}: ${value}`, {
        autoClose: 2000,
      });
    },

    cleared: () => {
      notifications.info('Filters cleared', {
        autoClose: 2000,
      });
    },

    noResults: (searchTerm) => {
      notifications.warning(
        searchTerm 
          ? `No companies found for "${searchTerm}"` 
          : 'No companies match your current filters',
        {
          autoClose: 4000,
        }
      );
    },
  },

  // Data loading notifications
  data: {
    loading: () => {
      return notifications.loading('Loading companies...');
    },

    loaded: (count) => {
      notifications.success(`Successfully loaded ${count} companies`, {
        autoClose: 2000,
      });
    },

    error: (error) => {
      notifications.error(`Failed to load companies: ${error.message || error}`, {
        autoClose: 6000,
      });
    },
  },

  // Pagination notifications
  pagination: {
    pageChanged: (page, totalPages) => {
      notifications.info(`Page ${page} of ${totalPages}`, {
        autoClose: 1500,
      });
    },
  },
};

export default notifications;