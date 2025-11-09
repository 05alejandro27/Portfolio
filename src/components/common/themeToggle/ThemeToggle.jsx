import { useTheme } from '../../../hooks/UseTheme';
import './themeToggle.css';

export const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button className='theme-toggle-button' onClick={toggleTheme}>
            {theme === 'dark' ? (
                <img src='/assets/icons/sun-icon.svg' alt='Tema Claro' height='24'/> 
            ) : (
                <img src='/assets/icons/moon-icon.svg' alt='Tema Oscuro' height='24'/>
            )}
        </button>
    );
};