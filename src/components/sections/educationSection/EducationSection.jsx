import { useTranslation } from "../../../hooks/UseTranslation";

export const EducationSection = () => {

    const { t } = useTranslation();

    return (
        <>
            <h1>{t('about.title')}</h1>
            <div>
                <img/> {/*logo instituto, quizas no lo pongo*/}
                <p>Titulo del estudio</p>
                <p>Institución y duración</p>
                <p>Aptitudes y conocimentos adquitidos</p>
            </div>
        </>
    )
}
