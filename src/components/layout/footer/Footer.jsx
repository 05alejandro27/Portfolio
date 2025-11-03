import { useTranslation } from '../../../hooks/UseTranslation';
import './footer.css'

export const Footer = () => {

    const { t } = useTranslation();

    return (
        <>
            <footer>
                <p>{t('footer.text')}</p>
                <a href='Navbar'>Volver</a>
            </footer>
        </>
    )
}