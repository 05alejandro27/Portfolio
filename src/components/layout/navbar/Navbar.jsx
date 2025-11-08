import { useTranslation } from '../../../hooks/UseTranslation'
import { LanguageSelector } from '../../common/languageSelector/LanguageSelector'
import { ThemeToggle } from '../../common/themeToggle/ThemeToggle'
import './navbar.css'

export const Navbar = () => {

    const { t } = useTranslation();

    return (
        <>
            <nav>
                <img className='me-icon' src='/assets/icons/me-icon.webp' alt='Mi icono'/>

                <div className='links-container'>
                    <ul>
                        <li><a className='links-style' href='../HeroSection/ProyectSection.jsx'>{t('nav.home')}</a></li>
                        <span>/</span>
                        <li><a className='links-style' href='AboutSection'>{t('nav.about')}</a></li>
                        <span>/</span>
                        <li><a className='links-style' href='TechnologiesSection'>{t('nav.technologies')}</a></li>
                        <span>/</span>
                        <li><a className='links-style' href='ExperienceSection'>{t('nav.experience')}</a></li>
                        <span>/</span>
                        <li><a className='links-style' href='Layout/ProyectSection.jsx'>{t('nav.projects')}</a></li>
                        <span>/</span>
                        <li><a className='links-style' href='EducationSection'>{t('nav.education')}</a></li>
                        {/*
                        <span>/</span>
                        <li><a className='links-style' href='#'>Contacto</a></li> Revisar si poner o quitar
                        */}
                    </ul>
                </div>

                <div className='buttons-container-nav'>
                    <LanguageSelector className='language-selector'></LanguageSelector>
                    <ThemeToggle className='theme-toggle'></ThemeToggle>
                </div>
            </nav>
        </>
    )
}