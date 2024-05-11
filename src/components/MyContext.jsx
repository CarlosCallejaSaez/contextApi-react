import React, { createContext, useState, useContext } from 'react';


const MyContext = createContext();
export const MyProvider = ({ children }) => {
  const [data, setData] = useState('Hello from context');

  return (
    <MyContext.Provider value={{ data, setData }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => useContext(MyContext);
