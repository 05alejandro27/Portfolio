import { useTranslation } from '../../../hooks/UseTranslation';
import './educationSection.css'

export const EducationSection = ({id}) => {

    const { t } = useTranslation();

    return (
        <div className='container-education' id={id}>
            <h1 className='title-education'>{t('education.title')}</h1>
            <div className='educations-container'>
                <div className='education-container-1'>
                    <p className='education-title'>{t('education.education1.title')}</p>
                    <p className='education-company'>{t('education.education1.company')}</p>
                    <p className='education-description'>{t('education.education1.description')}</p>
                </div>
                <div className='education-container-2'>
                    <p className='education-title'>{t('education.education2.title')}</p>
                    <p className='education-company'>{t('education.education2.company')}</p>
                    <p className='education-description'>{t('education.education2.description')}</p>
                </div>
            </div>
        </div>
    )
}
