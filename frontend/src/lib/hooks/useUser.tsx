// hooks/useUser.tsx
"use client"
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

import { UserInfo } from '@/lib/types/user';

const UserContext = createContext<{
  userInfo: UserInfo;
  setUserInfo: React.Dispatch<React.SetStateAction<UserInfo>>;
  clearUserInfo: () => void;
} | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    age: '',
    race: '',
    country: '',
    schoolStatus: '',
    topic: 'Education'
  });

  // Load from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('userInfo');
    if (stored) {
      setUserInfo(JSON.parse(stored));
    }
  }, []);

  // Save to localStorage whenever userInfo changes
  useEffect(() => {
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
  }, [userInfo]);

  const clearUserInfo = () => {
    const emptyInfo = {
      age: '',
      race: '',
      country: '',
      schoolStatus: '',
      topic: 'Education'
    };
    setUserInfo(emptyInfo);
    localStorage.removeItem('userInfo');
  };

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo, clearUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within UserProvider');
  }
  return context;
};
