import { createContext, useState } from 'react';
import { es } from '../data/translations/es';
import { en } from '../data/translations/en';
import { de } from '../data/translations/de';
import { zh } from '../data/translations/zh'

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('es');

    const translations = { es, en, de, zh };

    const t = (key) => {
        const keys = key.split('.');
        let result = translations[language];
        for (const k of keys) {
            result = result[k];
        }

        return result;
    };

    const value = {
        language,
        setLanguage,
        t
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};

export default LanguageContext;