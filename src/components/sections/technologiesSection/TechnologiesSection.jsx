import { useTranslation } from '../../../hooks/UseTranslation';
import './technologiesSection.css'

export const TechnologiesSection = ({id}) => {

    const { t } = useTranslation();

    return (
        <div className='container-technologies' id={id}>
            <h1 className='title-technologies'>{t('technologies.title')}</h1>
            <div className='list-technologies'>
                <div className='list-technologies-items'>
                    <img className='html-icon' src='/assets/icons/technologies/html-icon.svg' height={20}/>
                    <p>{t('technologies.listTechnologies.technologies1')}</p>
                </div>
                <div className='list-technologies-items'>
                    <img className='css-icon' src='/assets/icons/technologies/css-icon.svg' height={20}/>
                    <p>{t('technologies.listTechnologies.technologies2')}</p>
                </div>
                <div className='list-technologies-items'>
                    <img className='react-icon' src='/assets/icons/technologies/react-icon.svg' height={20}/>
                    <p>{t('technologies.listTechnologies.technologies3')}</p>
                </div>
                <div className='list-technologies-items'>
                    <img className='java-icon' src='/assets/icons/technologies/java-icon.svg' height={20}/>
                    <p>{t('technologies.listTechnologies.technologies4')}</p>
                </div>
                <div className='list-technologies-items'>
                    <img className='sql-icon' src='/assets/icons/technologies/sql-icon.svg' height={20}/>
                    <p>{t('technologies.listTechnologies.technologies5')}</p>
                </div>
                <div className='list-technologies-items'>
                    <img className='git-icon' src='/assets/icons/technologies/git-icon.svg' height={20}/>
                    <p>{t('technologies.listTechnologies.technologies6')}</p>
                </div>
            </div>
        </div>
    )
}