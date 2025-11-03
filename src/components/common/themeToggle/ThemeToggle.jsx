import { useState } from "react";


export const ThemeToggle = () => {

    const [theme, setTheme] = useState(true);

    const toggle = () => {
        setTheme(!theme);
    }

    return (
        <>
            <button onClick={toggle}>
                {theme ? <img src="/assets/icons/moon-icon.svg" alt="Oscuro" height="24"/> : <img src="/assets/icons/sun-icon.svg" alt="Claro" height="24"/>}
            </button>
        </>
    )
}