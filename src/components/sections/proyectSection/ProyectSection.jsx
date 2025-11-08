import { useTranslation } from '../../../hooks/UseTranslation';
import './proyectSection.css'

export const ProyectSection = () => {

    const { t } = useTranslation();

    return (
        <div className='container-proyect'>
            <h1 className='title-proyect'>{t('proyects.title')}</h1>
            <div className='proyects-container'>
                <div className='proyect-1-container'>
                    <h2 className='proyect-name'>{t('proyects.proyect1.name')}</h2>
                    <img className='proyect-image' src='/assets/images/proyect1.webp' width={800}/>
                    <p className='proyect-description'>{t('proyects.proyect1.description')}</p>
                    <div className='proyect-list-technologies'>
                        <img className="html-icon" src='/assets/icons/technologies/html-icon.svg' height={20}/>
                        <p>{t('proyects.proyect1.listTechnologies.technologies1')}</p>
                        <img className="css-icon" src='/assets/icons/technologies/css-icon.svg' height={20}/>
                        <p>{t('proyects.proyect1.listTechnologies.technologies2')}</p>
                        <img className="java-icon" src='/assets/icons/technologies/java-icon.svg' height={20}/>
                        <p>{t('proyects.proyect1.listTechnologies.technologies3')}</p>
                        <img className="sql-icon" src='/assets/icons/technologies/sql-icon.svg' height={20}/>
                        <p>{t('proyects.proyect1.listTechnologies.technologies4')}</p>
                        <img className="git-icon" src='/assets/icons/technologies/git-icon.svg' height={20}/>
                        <p>{t('proyects.proyect1.listTechnologies.technologies5')}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}