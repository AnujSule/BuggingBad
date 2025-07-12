import React, { createContext, useContext, useState, ReactNode } from 'react';

type Role = 'user' | 'admin' | null;

interface UserContextType {
  role: Role;
  loginAsUser: () => void;
  loginAsAdmin: () => void;
  logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [role, setRole] = useState<Role>(null);

  const loginAsUser = () => setRole('user');
  const loginAsAdmin = () => setRole('admin');
  const logout = () => setRole(null);

  return (
    <UserContext.Provider value={{ role, loginAsUser, loginAsAdmin, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error('useUser must be used within a UserProvider');
  return ctx;
}; 