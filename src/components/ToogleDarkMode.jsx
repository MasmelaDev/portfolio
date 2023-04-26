import { BsFillMoonFill,BsFillSunFill } from "react-icons/bs";
import { DarkModeContext } from "../contexts/DarkModeContext";
import React from "react";
function ToogleDarkMode() {
  
  const { isDarkMode, setDarkMode } = React.useContext(DarkModeContext);

  // Función para cambiar el estado del modo oscuro
  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };
  
  return (
    <button onClick={toggleDarkMode} title="Toogle Theme Mode" aria-label="Toogle Theme Mode" className="flex justify-center items-center h-14 w-14 lg:h-16 lg:w-16 bg-indigo-50 dark:bg-gray-950 transition-colors duration-300  rounded-full shadow-lg shadow-black/20 text-xl fixed z-30 top-3 right-2 lg:static">
      {isDarkMode ?  <BsFillSunFill className="text-2xl"/> : <BsFillMoonFill /> }
      
    </button>
  );
}

export { ToogleDarkMode };
