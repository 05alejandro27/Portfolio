import { useTranslation } from '../../../hooks/UseTranslation';
import './experienceSection.css'

export const ExperienceSection = () => {

    const { t } = useTranslation();

    return (
        <>
            <h1>{t('experience.title')}</h1>
            <div>
                <img/> {/*logo empresa*/}
                <p>{t('experience.job1.position')}</p>
                <p>{t('experience.job1.company')}</p>
                <p>{t('experience.job1.description')}</p>
            </div>
        </>
    )
}
