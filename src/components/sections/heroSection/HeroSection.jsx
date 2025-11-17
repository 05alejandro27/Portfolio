import { useTranslation } from '../../../hooks/UseTranslation'
import './heroSection.css'

export const HeroSection = ({id}) => {

    const { t } = useTranslation();
    
    return (
        <>
            <div className='container-hero' id={id}>
                <div>
                    <div className='text-container-hero'>
                        <h1 className='title-hero'>{t('hero.title')}</h1>
                        <p className='description-hero'>{t('hero.description')}</p>
                    </div>

                    <div className='buttons-container-hero'>
                        <a href='https://www.linkedin.com/in/alejandro-pe%C3%B1a-fern%C3%A1ndez-6a1025332/'>
                            <button className='linkedin-icon-button' >
                                <img className='linkedin-icon' src='/assets/icons/linkedin-icon.svg' alt='Icon Linkedin' height='24'/>
                            </button>
                        </a>
                        <a href='https://github.com/05alejandro27/05alejandro27'>
                            <button className='github-icon-button'>
                                <img className='github-icon' src='/assets/icons/github-icon.svg' alt='Icon Github' height='24'/>
                            </button>
                        </a>
                        <img className='download-icon-button' src='/assets/icons/download-icon.svg' alt='Download-Icon' height='24'/>
                        <a href='https://drive.google.com/file/d/1HUVFNr0l3Om1upi3-xGFePyrk3fNetzz/view?usp=sharing' target='blank'>
                            <button className='download-cv-button'>{t('hero.button')}</button>
                        </a>
                        <img className='mail-icon' src='/assets/icons/mail-icon.svg' alt='Icon Mail' height='24'/>
                        <span>alejandrodev27@gmail.com</span>
                    </div>
                </div>
                
                <img className='me-photo' src='/assets/images/me-foto.webp' alt='Photo Alejandro' height='150'/>
            </div>
        </>
    )
}
