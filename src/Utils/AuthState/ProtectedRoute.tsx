import React from 'react';

import { useLocation } from 'react-router-dom';
import { useMsal } from '@azure/msal-react'; // Import useMsal hook
import {loginRequest} from '../Config/authConfig'

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { instance, accounts, inProgress } = useMsal();
  const location = useLocation();

  React.useEffect(() => {
    // Assuming "none" represents no ongoing interaction. Adjust as necessary.
    if (inProgress === "none" && accounts.length === 0) {
      // No active accounts and no interactions in progress, trigger login
         // Trigger login with configurations from authConfig
    instance.loginRedirect(loginRequest(location.pathname)).catch(e => {
      console.error(e);
    });
    }
  }, [accounts.length, inProgress, instance, location.pathname]); // Use inProgress in the dependency array

  if (accounts.length === 0) {
    return <div>Logging In</div>; // Or any loading indicator
  }

  return <>{children}</>;
};

export default ProtectedRoute;