import { useTranslation } from '../../../hooks/UseTranslation';
import './technologiesSection.css'

export const TechnologiesSection = () => {

    const { t } = useTranslation();

    return (
        <>
            <h1>{t('technologies.title')}</h1>
            <p>{t('technologies.listTechnologies')}</p>
        </>
    )
}
