import { useTranslation } from '../../../hooks/UseTranslation'
import './aboutSection.css'

export const AboutSection = () => {

    const { t } = useTranslation();

    return (
        <div className='container-about'>
            <h1 className='title-about'>{t('about.title')}</h1>
            <p className='description-about'>{t('about.description')}</p>
        </div>
    )
}
