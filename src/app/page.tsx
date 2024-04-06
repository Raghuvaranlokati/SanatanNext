"use client"

import React from 'react';
import { MagnifyingGlassIcon } from "@radix-ui/react-icons"; // Assuming you've installed @radix-ui/react-icons"

export default function Page() {
  const [searchTerm, setSearchTerm] = React.useState(''); // State for search term

  const handleSearch = (event) => {
    if (event.key === 'Enter') {
      // Implement your search functionality here using searchTerm
      console.log('Search term:', searchTerm); // Example logging the search term
    }
    setSearchTerm(event.target.value);
  };

  return (
    <div className="app">
      <header className="header flex justify-between items-center bg-gray-800 text-white px-4 py-2">
        {/* Logo */}
        <img src="/logo.svg" alt="Your App Logo" className="h-8 w-8 mr-4" /> {/* Replace with your logo path */}
        
        <nav className="relative hidden lg:block"> {/* Added relative and lg:block classes */}
          <input
            type="text"
            placeholder="Search here.."
            className="w-full lg:w-[500px] h-12 py-2 pl-10 outline-none bg-muted rounded-2xl focus:ring-2 focus:ring-inset focus:ring-white"
            value={searchTerm}
            onChange={handleSearch}
            onKeyDown={handleSearch}
          />
          <MagnifyingGlassIcon className="absolute left-2 top-3 h-6 w-6 text-gray-400" /> {/* Added icon styles */}
        </nav>
        {/* Profile Image */}
        <img src="/avatar.png" alt="Profile Image" className="h-10 w-10 rounded-full mr-4" /> {/* Added profile image */}
      </header>
      <main className="body">
        {/* ... your main content ... */}
      </main>
      <footer className="footer">{/* ... your footer content ... */}</footer>
    </div>
  );
}