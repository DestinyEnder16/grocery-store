/*
import { createContext, ReactNode, useContext, useState } from 'react';

// defining our types - cause TS...
type UserContextType = {
  name: string | null;
  setName: (id: string) => void;
};

// defining our context
const UserContext = createContext<UserContextType | null>(null);

// create the 'Provider'
export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [name, setName] = useState('');
  return (
    <UserContext.Provider value={{ name, setName }}>
      {children}
    </UserContext.Provider>
  );
};

// custom hook for easy access
export const useUserInfo = () => useContext(UserContext);
*/

import { createContext, useContext, useState } from 'react';

type UserContextType = {
  userId: string | null;
  setUserId: (id: string) => void;
  userEmail: string | null;
  setUserEmail: (email: string) => void;
};

const UserContext = createContext<UserContextType | null>(null);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [userId, setUserId] = useState<string | null>('John Doe');
  const [userEmail, setUserEmail] = useState<string | null>(
    'johndoe@gmail.com'
  );

  return (
    <UserContext.Provider
      value={{ userId, setUserId, userEmail, setUserEmail }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error('useUser must be used inside UserProvider');
  return ctx;
}
