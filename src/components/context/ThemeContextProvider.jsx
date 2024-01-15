import React, { useContext, createContext, useState } from 'react'

export const ThemeContext = createContext()

const ThemeContextProvider = ( {children} ) => {

    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode((prevMode) => !prevMode);
    }
  return (
    <ThemeContext.Provider value={{isDarkMode, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}

const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider")
    }
    return context;
}

export { ThemeContextProvider, useTheme }
