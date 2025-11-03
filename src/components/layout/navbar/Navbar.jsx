import { useTranslation } from '../../../hooks/UseTranslation'
import { LanguageSelector } from '../../common/languageSelector/LanguageSelector'
import { ThemeToggle } from '../../common/themeToggle/ThemeToggle'
import './navbar.css'

export const Navbar = () => {

    const { t } = useTranslation();

    return (
        <>
            <nav>
                <img id="img" src="/assets/icons/me-icon.webp" alt="Mi icono" height={"100px"}/>

                <ul>
                    <li><a href="HeroSection" className="enlaces-style">{t('nav.home')}</a></li>
                    <span>/</span>
                    <li><a href="AboutSection" className="enlaces-style">{t('nav.about')}</a></li>
                    <span>/</span>
                    <li><a href="TechnologiesSection" className="enlaces-style">{t('nav.technologies')}</a></li>
                    <span>/</span>
                    <li><a href="ExperienceSection" className="enlaces-style">{t('nav.experience')}</a></li>
                    <span>/</span>
                    <li><a href="#" className="enlaces-style">{t('nav.projects')}</a></li>
                    <span>/</span>
                    <li><a href="EducationSection" className="enlaces-style">{t('nav.education')}</a></li>
                    <span>/</span>
                    <li><a href="#" className="enlaces-style">Certificados</a></li> {/*Revisar si poner o quitar*/}
                    <span>/</span>
                    <li><a href="#" className="enlaces-style">Contacto</a></li> {/*Revisar si poner o quitar*/}
                </ul>

                <LanguageSelector></LanguageSelector>
                <ThemeToggle></ThemeToggle>
            </nav>
        </>
    )
}