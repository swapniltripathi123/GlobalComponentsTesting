import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import LogoutButton from './LogoutButton';

const GlobalDropdown = ({ items, title, dropdownStyle, onSelect, multiSelect }) => {
  const initialSelectedTitles = multiSelect ? [] : [];

  const [selectedTitles, setSelectedTitles] = useState(initialSelectedTitles);

  const handleItemClick = (item) => {
    if (onSelect) {
      let newSelectedTitles;
      if (multiSelect) {
        // Toggle selection for multi-select
        if (selectedTitles.includes(item)) {
          newSelectedTitles = selectedTitles.filter((selected) => selected !== item);
        } else {
          newSelectedTitles = [...selectedTitles, item];
        }
      } else {
        newSelectedTitles = [item]; // Single-select, replace the selection
      }

      onSelect(newSelectedTitles); // Pass the selected items correctly
      setSelectedTitles(newSelectedTitles);
      console.log(newSelectedTitles);
    }
  };

  return (
    <Dropdown>
      <Dropdown.Toggle id="dropdown-basic" style={dropdownStyle}>
        {selectedTitles.length === 0 ? title : selectedTitles.join(', ')}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {items.map((item, index) => (
          <Dropdown.Item key={index} onClick={() => handleItemClick(item)}>
            {item === 'Logout' ? <LogoutButton /> : item.label}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default GlobalDropdown;
