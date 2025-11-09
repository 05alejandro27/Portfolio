import { useTranslation } from '../../../hooks/UseTranslation';
import './experienceSection.css'

export const ExperienceSection = ({id}) => {

    const { t } = useTranslation();

    return (
        <div className='container-experience' id={id}>
            <h1 className='title-experience'>{t('experience.title')}</h1>
            <div className='experience-container'>
                <p className='experience-position'>{t('experience.job1.position')}</p>
                <p className='experience-company'>{t('experience.job1.company')}</p>
                <p className='experience-description'>{t('experience.job1.description')}</p>
            </div>
        </div>
    )
}
