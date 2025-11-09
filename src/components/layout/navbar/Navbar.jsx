import { useTranslation } from '../../../hooks/UseTranslation'
import { LanguageSelector } from '../../common/languageSelector/LanguageSelector'
import { ThemeToggle } from '../../common/themeToggle/ThemeToggle'
import './navbar.css'

export const Navbar = () => {

    const { t } = useTranslation();

    return (
        <nav>
            <img className='me-icon' src='/assets/icons/me-icon.webp' alt='Mi icono'/>

            <div className='links-container'>
                <ul>
                    <li><a className='links-style' href='#home'>{t('nav.home')}</a></li>
                    <span>/</span>
                    <li><a className='links-style' href='#about'>{t('nav.about')}</a></li>
                    <span>/</span>
                    <li><a className='links-style' href='#technologies'>{t('nav.technologies')}</a></li>
                    <span>/</span>
                    <li><a className='links-style' href='#experience'>{t('nav.experience')}</a></li>
                    <span>/</span>
                    <li><a className='links-style' href='#projects'>{t('nav.projects')}</a></li>
                    <span>/</span>
                    <li><a className='links-style' href='#education'>{t('nav.education')}</a></li>
                </ul>
            </div>

            <div className='buttons-container-nav'>
                <LanguageSelector className='language-selector'></LanguageSelector>
                <ThemeToggle className='theme-toggle'></ThemeToggle>
            </div>
        </nav>
    )
}