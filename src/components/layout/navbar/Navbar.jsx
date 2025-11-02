import './navbar.css'

export const Navbar = () => {
    return (
        <>
            <nav>
                <img id="img" src="/assets/icons/me-icon.webp" alt="Mi icono" height={"100px"}/>

                <ul>
                    <li><a href="#" className="enlaces-style">Inicio</a></li>
                    <span>/</span>
                    <li><a href="#" className="enlaces-style">Sobre mi</a></li>
                    <span>/</span>
                    <li><a href="#" className="enlaces-style">Tecnologías</a></li>
                    <span>/</span>
                    <li><a href="#" className="enlaces-style">Experiencia laboral</a></li>
                    <span>/</span>
                    <li><a href="#" className="enlaces-style">Proyectos</a></li> {/*Revisar si poner o quitar*/}
                    <span>/</span>
                    <li><a href="#" className="enlaces-style">Formación</a></li>
                    <span>/</span>
                    <li><a href="#" className="enlaces-style">Certificados</a></li> {/*Revisar si poner o quitar*/}
                    <span>/</span>
                    <li><a href="#" className="enlaces-style">Contacto</a></li> {/*Revisar si poner o quitar*/}
                </ul>

                {/*Cambio de idioma*/}
                {/*Cambio de claro a oscuro*/}
            </nav>
        </>
    )
}