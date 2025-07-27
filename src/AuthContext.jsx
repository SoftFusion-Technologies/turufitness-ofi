/*
 * Programador: Benjamin Orellana
 * Fecha Actualización: 14 / 07 / 2025
 * Versión: 1.0
 *
 * Descripción:
 * Este archivo (AuthContext.jsx) gestiona el estado de sesión del usuario mediante token JWT,
 * utilizando la tabla 'usuarios' de SoftPay y sincronizado con el backend Node.js.
 *
 * Tema: Autenticación
 * Capa: Frontend
 */

import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(null);
  const [userId, setUserId] = useState(null);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userRol, setUserRol] = useState('');

  const logout = () => {
    setAuthToken(null);
    setUserId(null);
    setUserName('');
    setUserEmail('');
    setUserRol('');

    localStorage.removeItem('authToken');
    localStorage.removeItem('userId');
    localStorage.removeItem('userName');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userRol');
  };

  const login = (token, id, nombre, email, rol) => {
    setAuthToken(token);
    setUserId(id);
    setUserName(nombre);
    setUserEmail(email);
    setUserRol(rol);

    localStorage.setItem('authToken', token);
    localStorage.setItem('userId', id);
    localStorage.setItem('userName', nombre);
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userRol', rol);
  };

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    const id = localStorage.getItem('userId');
    const name = localStorage.getItem('userName');
    const email = localStorage.getItem('userEmail');
    const rol = localStorage.getItem('userRol');

    if (token) {
      try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        const isExpired = Date.now() >= payload.exp * 1000;
        if (isExpired) {
          logout();
        } else {
          setAuthToken(token);
        }
      } catch (e) {
        console.error('Token inválido:', e);
        logout();
      }
    }

    if (id) setUserId(id);
    if (name) setUserName(name);
    if (email) setUserEmail(email);
    if (rol) setUserRol(rol);

    const handleBeforeUnload = () => {
      localStorage.removeItem('authToken');
      localStorage.removeItem('userId');
      localStorage.removeItem('userName');
      localStorage.removeItem('userEmail');
      localStorage.removeItem('userRol');
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{
        authToken,
        userId,
        userName,
        userEmail,
        userRol,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
