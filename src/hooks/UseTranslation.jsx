import { useContext } from 'react';
import LanguageContext from '../context/LanguageContext';

export const useTranslation = () => {
    const context = useContext(LanguageContext);

    if (context === undefined) {
        throw new Error('useLanguage debe ser usado dentro de un LanguageProvider');
    }
    
    return context;
};