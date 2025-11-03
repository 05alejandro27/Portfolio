import { useTranslation } from '../../../hooks/UseTranslation'
import './heroSection.css'

export const HeroSection = () => {

    const { t } = useTranslation();
    
    return (
        <>
            <h1>{t('hero.title')}</h1>
            <p>{t('hero.description')}</p>
            <p></p> {/*Redes sociales*/}
            <p></p> {/*Descargar CV*/}
            <img/> {/*Mi imagen*/}
        </>
    )
}
