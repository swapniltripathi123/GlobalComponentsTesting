import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SearchBar from './SearchBar';
import { useAuth } from '../AuthContext';
import hasPermission from '../../Util/permissionCheckUtil'; 

const SidePanel = ({ menuItems, showSearchBar }) => {
  const { isAuthenticated } = useAuth();

  const handleSearch = (query) => {
    // ... (your existing handleSearch code)
  };

  const [filteredMenuItems, setFilteredMenuItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const promises = menuItems.map(async (item) => {
        const hasPerm = await hasPermission(item.permission);
        return { ...item, hasPermission: hasPerm };
      });

      const filteredItems = await Promise.all(promises);
      setFilteredMenuItems(filteredItems);
    };

    fetchData();
  }, []);

  return (
    <nav id="sidebarMenu" className="collapse d-lg-block sidebar bg-white p-3 w-20">
      {showSearchBar && <SearchBar placeholder={"Search"} onSearch={handleSearch} />}
     { isAuthenticated() &&  <div className="mt-4 bg-white">
        {filteredMenuItems.map((item, index) => (
            <Link
            key={index}
              to={item.hasPermission ? item.link : '/error'}
            className={`d-flex align-items-center py-2 mb-2 ${item.active ? 'active' : ''}`}
              aria-current={item.active ? 'true' : 'false'}
            >
              <FontAwesomeIcon icon={item.icon} className="me-3" />
              <span>{item.title}</span>
            </Link>
        ))}
      </div> }
    </nav>
  );
};

export default SidePanel;
