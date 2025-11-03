import React, { createContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    // Usamos strings 'light' y 'dark' que son más descriptivos que un booleano
    const [theme, setTheme] = useState('light'); // Tema por defecto

    // La función para cambiar el tema
    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    // EFECTO SECUNDARIO: Este es el paso clave.
    // Cada vez que el estado 'theme' cambie, este efecto se ejecutará
    // y cambiará la clase del <body> del documento.
    useEffect(() => {
    document.body.className = ''; // Limpiamos clases previas
    document.body.classList.add(theme); // Añadimos 'light' o 'dark'
    }, [theme]); // Se ejecuta solo cuando 'theme' cambia

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
        </ThemeContext.Provider>
    );
};

export default ThemeContext;