import { useTranslation } from '../../../hooks/UseTranslation';
import './proyectSection.css'

export const ProyectSection = ({id}) => {

    const { t } = useTranslation();

    return (
        <div className='container-proyect' id={id}>
            <h1 className='title-proyect'>{t('proyects.title')}</h1>
            <div className='proyects-container'>
                <div className='proyect-1-container'>
                    <h2 className='proyect-name'>{t('proyects.proyect1.name')}</h2>
                    <img className='proyect-image' src='/assets/images/proyect1.webp'/>
                    <p className='proyect-description'>{t('proyects.proyect1.description')}</p>
                    <div className='proyect-code-information'>
                        <div className='proyect-list-technologies'>
                            <div className='proyect-list-technologies-items'>
                                <img className='html-icon' src='/assets/icons/technologies/html-icon.svg' height={20}/>
                                <p>{t('proyects.proyect1.listTechnologies.technologies1')}</p>
                            </div>
                            <div className='proyect-list-technologies-items'>
                                <img className='css-icon' src='/assets/icons/technologies/css-icon.svg' height={20}/>
                                <p>{t('proyects.proyect1.listTechnologies.technologies2')}</p>
                            </div>
                            <div className='proyect-list-technologies-items'>
                                <img className='java-icon' src='/assets/icons/technologies/java-icon.svg' height={20}/>
                                <p>{t('proyects.proyect1.listTechnologies.technologies3')}</p>
                            </div>
                            <div className='proyect-list-technologies-items'>
                                <img className='sql-icon' src='/assets/icons/technologies/sql-icon.svg' height={20}/>
                                <p>{t('proyects.proyect1.listTechnologies.technologies4')}</p>
                            </div>
                            <div className='proyect-list-technologies-items'>
                                <img className='git-icon' src='/assets/icons/technologies/git-icon.svg' height={20}/>
                                <p>{t('proyects.proyect1.listTechnologies.technologies5')}</p>
                            </div>
                        </div>
                        <a className='proyect-source' href='https://github.com/05alejandro27/Empresa/tree/master'>
                            <button>{t('proyects.proyect1.source')}</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}