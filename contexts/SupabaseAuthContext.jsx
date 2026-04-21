import React, { createContext, useContext } from 'react';

const AuthContext = createContext(undefined);

export const AuthProvider = ({ children }) => {
  // Authentication is disabled as per requirements.
  // Mocking an admin user so components relying on useAuth don't break,
  // even though most checks are being removed.
  const value = {
    user: { id: 'public-user', role: 'admin' },
    session: {},
    loading: false,
    isAdmin: true,
    signUp: async () => ({ error: null }),
    signIn: async () => ({ error: null }),
    signOut: async () => ({ error: null }),
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};