import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';

const LogoutButton = () => {
  const navigate = useNavigate();
  const { handleLogout } = useAuth();

  const onLogout = () => {
    // Perform logout logic, e.g., clear authentication tokens, reset user session, etc.
    // For now, let's just call handleLoginFailure to clear the authentication status
    handleLogout();
    navigate('/');
  };

  return (
    <button
      className="btn btn-outline-light text-dark no-focus-outline" // Apply the CSS class here
      onClick={onLogout}
    >
      Logout
    </button>
  );
};

export default LogoutButton;
