/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";

// Crea un contexto para el modo oscuro
export const DarkModeContext = createContext();

// Crea un proveedor de contexto para el modo oscuro
export const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Verifica si el sistema operativo está en modo oscuro
  const isDarkModeSO = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  // Verifica si hay un valor en el localStorage para el modo oscuro
  const isDarkModeLocalStorage = JSON.parse(
    window.localStorage.getItem("darkMode")
  );

  // Respeta el modo oscuro del sistema operativo solo si no hay un valor en el localStorage
  useEffect(() => {
    setDarkMode(
      isDarkModeLocalStorage === null ? isDarkModeSO : isDarkModeLocalStorage
    );
    setDarkMode
  }, [isDarkModeLocalStorage, isDarkModeSO]);

  const setDarkMode = (isDark) => {
    setIsDarkMode(isDark);
    window.localStorage.setItem("darkMode", JSON.stringify(isDark));
    isDark
      ? document.body.classList.add("dark")
      : document.body.classList.remove("dark");
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, setDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
