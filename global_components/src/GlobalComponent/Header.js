import React from 'react';
import { useAuth } from '../AuthContext';
import GoogleSignInButton from '../GoogleSignInButton'; 
import CustomDropdown from './Dropdown'; 
import { dropdownItems } from '../../Items/DummyData';

const Header = () => {
  const { isAuthenticated, userEmail } = useAuth(); // Assuming useAuth returns isAuthenticated

  return (
    <header className="d-flex justify-content-between align-items-center bg-dark p-1">
      <div className="d-flex align-items-center" style={{ marginLeft: '10px', marginTop: '10px' }}>

        <img
         // TODO: WILL DOWNLOAD THIS IMAGE IN ASSETS AND HEN USE IT HERE
          src="https://images.yourstory.com/cs/images/companies/smartcoin-1584425631019.jpg"
          alt=""
          style={{ width: '35px', height: 'auto', marginRight: '5px' }}
        />

        <h6 className="text-light m-0 text-uppercase" style={{ fontSize: '16px', letterSpacing: '2px' }}>
          SMART<font style={{ color: '#ffa000' }}>COIN</font> ADMIN PANEL
        </h6>
      </div>
      <div className="d-flex flex-column align-items-end">
        {isAuthenticated() ? (
        <CustomDropdown  items={dropdownItems} title={userEmail} dropdownStyle={{backgroundColor: '#212529', borderColor: '#212529'}}/>
        ) : (
           // Show the Google sign-in button when not authenticated
           <GoogleSignInButton />
        )}
        </div>
    </header>
  );
};

export default Header;
