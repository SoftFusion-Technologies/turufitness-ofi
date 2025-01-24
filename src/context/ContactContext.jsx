import React, { createContext, useState } from 'react';

// Crear el contexto
export const ContactContext = createContext();

// Proveedor del contexto
export const ContactProvider = ({ children }) => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <ContactContext.Provider value={{ isContactOpen, setIsContactOpen }}>
      {children}
    </ContactContext.Provider>
  );
};