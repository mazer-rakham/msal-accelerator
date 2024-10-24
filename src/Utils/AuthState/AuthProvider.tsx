import React, { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import { useMsal } from '@azure/msal-react';
import { InteractionStatus } from '@azure/msal-browser';

type AuthContextType = {
  isLoginComplete: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { inProgress } = useMsal();
  const [isLoginComplete, setIsLoginComplete] = useState(false);

  useEffect(() => {
    setIsLoginComplete(inProgress === InteractionStatus.None);
  }, [inProgress]);

  return (
    <AuthContext.Provider value={{ isLoginComplete }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};