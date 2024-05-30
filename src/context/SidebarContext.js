import { createContext } from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
export const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [isShow, setShow] = useState(true);

  return (
    <SidebarContext.Provider value={{ isShow, setShow }}>
      {children}
    </SidebarContext.Provider>
  );
};

SidebarProvider.propTypes = {
  children: PropTypes.any
};
