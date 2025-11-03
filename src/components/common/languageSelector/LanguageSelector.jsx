import { useState, useEffect, useRef } from 'react';
import { useTranslation } from '../../../hooks/UseTranslation';
import './languageSelector.css';

export const LanguageSelector = () => {
    const { language, setLanguage } = useTranslation();

    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const languages = [
        { code: 'es', name: 'Español', flag: '🇪🇸' },
        { code: 'en', name: 'English', flag: '🇬🇧' },
        { code: 'de', name: 'Deutsch', flag: '🇩🇪' }
    ];

    const currentLanguage = languages.find(lang => lang.code === language);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const selectLanguage = (code) => {
        setLanguage(code); // Esta función ahora actualiza el estado GLOBAL
        setIsOpen(false);
    };

    // Este efecto para cerrar el dropdown al hacer clic fuera es perfecto, no se toca.
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="language-selector" ref={dropdownRef}>
            <button 
                className={`language-button ${isOpen ? 'open' : ''}`}
                onClick={toggleDropdown}
                aria-label="Seleccionar idioma"
            >
                <img src="/assets/icons/translate-icon.svg" alt="Traducir" className="translate-icon" />
                <span className="current-lang">{currentLanguage?.code.toUpperCase()}</span>
                <span className={`arrow ${isOpen ? 'up' : 'down'}`}>▼</span>
            </button>

            {isOpen && (
                <div className="dropdown-menu">
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            className={`dropdown-item ${language === lang.code ? 'active' : ''}`}
                            onClick={() => selectLanguage(lang.code)}
                        >
                            <span className="flag">{lang.flag}</span>
                            <span className="lang-name">{lang.name}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};