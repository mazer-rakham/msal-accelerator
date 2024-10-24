import React from 'react';
import { Route, Routes } from 'react-router-dom';
import EveryoneCanSee from './Pages/NotAuthorized/EveryoneCanSee';
import CanOnlySeeLoggedIn from './Pages/Authorized/CanOnlySeeLoggedIn';
import { AuthProvider } from './Utils/AuthState/AuthProvider';
import ProtectedRoute from './Utils/AuthState/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<EveryoneCanSee />}>
          <ProtectedRoute>
            <Route path="/log-in" element={<CanOnlySeeLoggedIn />} />
          </ProtectedRoute>
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
