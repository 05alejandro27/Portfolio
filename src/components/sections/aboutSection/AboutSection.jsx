import { useTranslation } from '../../../hooks/UseTranslation'
import './aboutSection.css'

export const AboutSection = () => {

    const { t } = useTranslation();

    return (
        <>
            <h1>{t('about.title')}</h1>
            <p>{t('about.description')}</p>
        </>
    )
}
