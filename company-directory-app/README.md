# 🏢 Company Directory App

A modern, responsive React application for browsing and discovering companies across various industries. Built with React 19, Vite, and modern web technologies to provide an intuitive company discovery experience.

![Company Directory Preview](https://via.placeholder.com/800x400/4F46E5/FFFFFF?text=Company+Directory+App)

## 🚀 Live Demo

[View Live Application](https://company-directory-app-fa6fc.web.app) | [GitHub Repository](https://github.com/Akashdevireddy09/companies-directory-app)

## ✨ Features

### 🔍 **Advanced Search & Filtering**
- **Real-time Search**: Instant search across company names
- **Multi-Filter Support**: Filter by industry and location simultaneously
- **Smart Notifications**: Real-time feedback for filter applications and results

### 🏢 **Company Information Display**
- **Company Cards**: Clean, professional card layout with company logos
- **Dynamic Logo Loading**: Automatic logo fetching via Clearbit API
- **Founded Year Display**: Shows company establishment date
- **Responsive Grid**: 4-column layout on desktop, adaptive on mobile

### 🔗 **Interactive Navigation**
- **Visit Company**: Direct links to company websites
- **Career Pages**: Quick access to job opportunities
- **External Link Safety**: Secure external link handling with `noopener,noreferrer`

### 📱 **User Experience**
- **Responsive Design**: Optimized for all screen sizes
- **Loading States**: Smooth loading animations and spinners
- **Error Handling**: Graceful error states with user-friendly messages
- **Toast Notifications**: Real-time feedback using react-toastify
- **Pagination**: Efficient data browsing with 8 companies per page

### 🎨 **Modern UI/UX**
- **CSS Grid Layout**: Modern layout system for optimal responsiveness
- **Hover Effects**: Interactive button animations and visual feedback
- **Professional Styling**: Clean, corporate-ready design
- **Custom Logo Integration**: Branded application header

## 🛠️ Technology Stack

### **Frontend Framework**
- **React 19.1.1** - Latest React with concurrent features
- **Vite 7.1.14** - Ultra-fast build tool with Rolldown

### **State Management & Logic**
- **React Hooks** - useState, useEffect for component state
- **Local JSON Data** - Structured company database

### **UI & Styling**
- **CSS3** - Modern CSS with Grid, Flexbox, and custom properties
- **React-Toastify 11.0.5** - Professional notification system
- **Responsive Design** - Mobile-first approach

### **Development Tools**
- **ESLint 9.36.0** - Code quality and consistency
- **Vite Plugin React SWC** - Fast refresh and optimized builds

## 📂 Project Structure

```
company-directory-app/
├── public/
│   ├── logo.png                 # Application logo
│   └── vite.svg                 # Vite favicon
├── src/
│   ├── components/              # Reusable React components
│   │   ├── CompanyCard.jsx      # Individual company display
│   │   ├── CompanyList.jsx      # Company grid container
│   │   ├── FilterControls.jsx   # Search and filter controls
│   │   ├── Pagination.jsx       # Page navigation component
│   │   └── StatusIndicators.jsx # Loading, error states
│   ├── utils/
│   │   └── notifications.js     # Centralized notification system
│   ├── App.jsx                  # Main application component
│   ├── index.css               # Global styles and CSS variables
│   ├── main.jsx                # React application entry point
│   └── companies.json          # Company data (32 companies)
├── package.json                # Dependencies and scripts
├── vite.config.js             # Vite configuration
├── eslint.config.js           # ESLint configuration
└── README.md                  # Project documentation
```

## 🚀 Quick Start

### Prerequisites
- **Node.js** (v16 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Akashdevireddy09/companies-directory-app.git
   cd company-directory-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint checks
```

## 🏗️ Architecture & Implementation

### **Component Architecture**
- **Modular Design**: Each component has a single responsibility
- **Props-based Communication**: Clean data flow between components
- **Reusable Components**: StatusIndicators, Pagination for multiple use cases

### **State Management**
- **Local State**: React hooks for component-level state
- **Derived State**: Computed values for filtering and pagination
- **Effect Management**: useEffect for data fetching and side effects

### **Performance Optimizations**
- **Lazy Loading**: Efficient image loading with fallbacks
- **Pagination**: Limited DOM rendering with 8 items per page
- **Debounced Search**: Optimized search performance
- **Modern Build Tools**: Vite with SWC for fast compilation

### **Data Structure**
```javascript
{
  "id": "unique-identifier",
  "name": "Company Name",
  "industry": "Technology",
  "location": "San Francisco, CA",
  "domain": "company.com",
  "foundedYear": 2010,
  "careerPage": "https://company.com/careers"
}
```

## 🔧 Customization

### **Adding New Companies**
Edit `src/companies.json` with the required data structure:
```javascript
{
  "id": "new-company-id",
  "name": "New Company",
  "industry": "Industry",
  "location": "City, State",
  "domain": "newcompany.com",
  "foundedYear": 2023,
  "careerPage": "https://newcompany.com/careers"
}
```

### **Styling Customization**
Modify CSS variables in `src/index.css`:
```css
:root {
  --primary-bg: #f4f7f9;
  --card-bg: #ffffff;
  --accent-color: #4f46e5;
  /* ... other variables */
}
```

## 🌟 Key Features Showcase

### **Intelligent Filtering System**
- Real-time search with instant results
- Multi-dimensional filtering (industry + location)
- Smart reset functionality when filters change

### **Professional Company Cards**
- Automatic logo integration via Clearbit API
- Fallback image handling for missing logos
- Founded year display with elegant styling
- Dual action buttons (Visit + Careers)

### **Enhanced User Feedback**
- Loading states with professional spinners
- Success/error notifications for all actions
- Page change confirmations
- Filter application feedback

### **Responsive Design Excellence**
- Desktop: 4-column grid layout
- Tablet: 2-column adaptive layout
- Mobile: Single-column with stacked buttons
- Consistent spacing and typography across devices

## 🚀 Deployment

### **Production Build**
```bash
npm run build
```

### **Deployment Platforms**
- **Vercel**: Automatic deployments from GitHub
- **Netlify**: Drag-and-drop or Git integration
- **GitHub Pages**: Static hosting solution

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Developer

**Akash Devireddy**
- GitHub: [@Akashdevireddy09](https://github.com/Akashdevireddy09)
- Email: [devireddyakash0988@gmail.com](devireddyakash0988@gmail.com)

## 🙏 Acknowledgments

- **Clearbit API** for company logo integration
- **React Team** for the amazing framework
- **Vite Team** for the lightning-fast build tool
- **Open Source Community** for inspiration and tools

---

⭐ **Star this repository if you found it helpful!**
