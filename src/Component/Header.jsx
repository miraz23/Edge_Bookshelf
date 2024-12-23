import React from 'react';
import { Link } from 'react-router';
import { useNavigate } from 'react-router';

const Header = ({ onSearch }) => {
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      const query = e.target.value.trim();
      if (query) {
        navigate(`/search?q=${query}`);
      }
    }
  };

  return (
    <header className="flex items-center justify-between p-3 bg-gray-100 shadow-md">

      <div className='flex '>
        <div className="mr-4">
          <button className="flex items-center gap-2 border border-gray-300 rounded-md px-3 py-2 text-sm font-medium">All<svg width="13" height="7" viewBox="0 0 13 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.17585 6.38027C6.79349 6.73088 6.20651 6.73088 5.82415 6.38027L1.03312 1.98704C0.360988 1.37072 0.797034 0.25 1.70896 0.25L11.291 0.25C12.203 0.25 12.639 1.37072 11.9669 1.98704L7.17585 6.38027Z" fill="#4D4D4D"/></svg></button>
        </div>   
        <div className="flex items-center mr-4">
          <input type="text" placeholder="Search" className="border border-gray-300 rounded-md px-3 py-2 text-sm mr-2"
           onKeyDown={handleSearch}/>
          
          <Link to="/search"><button className="text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
              </svg>
          </button></Link>
        </div>
      </div>

      <div className='flex'>
        <div className="mr-4">
          <button className="flex items-center gap-2 border border-gray-300 rounded-md px-3 py-2 text-sm font-medium"> Lang<svg width="13" height="7" viewBox="0 0 13 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.17585 6.38027C6.79349 6.73088 6.20651 6.73088 5.82415 6.38027L1.03312 1.98704C0.360988 1.37072 0.797034 0.25 1.70896 0.25L11.291 0.25C12.203 0.25 12.639 1.37072 11.9669 1.98704L7.17585 6.38027Z" fill="#4D4D4D"/></svg></button>
        </div>
        <div className="mr-4">
          <input  type="time" defaultValue="09:00" className="border border-gray-300 rounded-md px-3 py-2 text-sm"/>
        </div>
        <div className="mr-4">
          <input  type="date" defaultValue="2024-12-24" className="border border-gray-300 rounded-md px-3 py-2 text-sm"/>
        </div>
      </div>

      <div className="flex items-center">
        <button className="text-sm font-medium text-gray-800 mr-2">Miraz</button>
        <img src="./src/assets/developer.jpg" alt="Profile" className="w-8 h-8 rounded-full border border-gray-300"/>
      </div>
    </header>
  );
};

export default Header;
