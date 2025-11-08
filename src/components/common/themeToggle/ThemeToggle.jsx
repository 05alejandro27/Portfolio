import { useTheme } from '../../../hooks/UseTheme'; // Usamos nuestro nuevo hook
import './themeToggle.css'; // Asegúrate de tener un CSS para el botón si lo necesitas

export const ThemeToggle = () => {
    // Obtenemos el estado y la función del contexto global
    const { theme, toggleTheme } = useTheme();

    return (
        <button className="theme-toggle-button" onClick={toggleTheme}>
            {/* Comprobamos si el tema es 'dark' para mostrar el sol */}
            {theme === 'dark' ? (
                <img src="/assets/icons/sun-icon.svg" alt="Tema Claro" height="24"/> 
            ) : (
                <img src="/assets/icons/moon-icon.svg" alt="Tema Oscuro" height="24"/>
            )}
        </button>
    );
};