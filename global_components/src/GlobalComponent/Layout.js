import React from 'react';
import Header from './Header';
import SidePanel from './SidePanel';
import { Dropdown } from 'react-bootstrap';
import { menuItems } from '../../Items/DummyData';

const Layout = ({children , showSearchBar }) => {

  console.log(showSearchBar);

  return (
    <div>
      <Header /> 
      <div className="app-container d-flex">
        <div className="side-panel d-flex flex-column"> 
          <SidePanel menuItems={menuItems} showSearchBar={showSearchBar}/>
        </div>
        <div className="main-content d-flex flex-column flex-grow-1"> 
          <Dropdown />
          <div className="flex-grow-1">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
