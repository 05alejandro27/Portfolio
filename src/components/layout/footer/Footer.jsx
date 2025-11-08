import { useTranslation } from '../../../hooks/UseTranslation';
import './footer.css'

export const Footer = () => {

    const { t } = useTranslation();

    return (
        <>
            <footer>
                <p>{t('footer.text')}</p>
                <a href='Navbar'><img className="arrow-icon" src='/assets/icons/arrow-up-icon.svg' height={20}/></a>
            </footer>
        </>
    )
}