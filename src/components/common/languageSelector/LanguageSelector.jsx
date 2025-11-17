import { useState } from 'react';
import { useTranslation } from '../../../hooks/UseTranslation';
import './languageSelector.css';

export const LanguageSelector = () => {
    const { language, setLanguage } = useTranslation();

    const [isOpen, setIsOpen] = useState(false);

    const languages = [
        { code: 'de', name: 'Deutsch'},
        { code: 'en', name: 'English'},
        { code: 'es', name: 'Español'},
        { code: 'zh', name: 'Zhōngguó rén'}
    ];

    const toggleDropdown = () => setIsOpen(!isOpen);

    const selectLanguage = (code) => {
        setLanguage(code);
        setIsOpen(false);
    };
    
    return (
        <div className='language-selector-container'>
            <button className='language-button' onClick={toggleDropdown}>
                <img className='translate-icon' src='/assets/icons/translate-icon.svg' alt='Traducir'/>   
            </button>

            {isOpen && (
                <div className='dropdown-menu'> 
                    {languages.map((lang) => (
                        <button key={lang.code} className='dropdown-item' onClick={() => selectLanguage(lang.code)}>
                            <p className='lang-name'>{lang.name}</p>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};