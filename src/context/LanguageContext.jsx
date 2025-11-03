import React, { createContext, useState } from 'react';
import { es } from '../data/translations/es';
import { en } from '../data/translations/en';
import { de } from '../data/translations/de';

// 1. Creamos el Contexto
const LanguageContext = createContext();

// 2. Creamos el componente Proveedor
export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('es');

    const translations = { es, en, de };

    // Función 't' para obtener el texto correcto
    // La clave es un string, ej: 'nav.home' o 'experience.job1.title'
    const t = (key) => {
        const keys = key.split('.');
        let result = translations[language];
        for (const k of keys) {
        result = result?.[k]; // Usamos optional chaining por si una clave no existe
        }
        // Si no encuentra la clave, devuelve la clave misma para que sepas qué falta
        return result || key;
    };

    // El valor que proveeremos a los componentes hijos
    const value = {
        language,    // El idioma actual ('es', 'en', 'de')
        setLanguage, // La función para cambiar el idioma
        t            // La función para traducir
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};

// 3. Exportamos el Contexto para poder usarlo en nuestro hook
export default LanguageContext;