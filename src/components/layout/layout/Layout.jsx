import { AboutSection } from '../../sections/aboutSection/AboutSection'
import { EducationSection } from '../../sections/educationSection/EducationSection'
import { ExperienceSection } from '../../sections/experienceSection/ExperienceSection'
import { HeroSection } from '../../sections/heroSection/HeroSection'
import { ProyectSection } from '../../sections/proyectSection/ProyectSection'
import { TechnologiesSection } from '../../sections/technologiesSection/TechnologiesSection'
import './layout.css'

export const Layout = () => {
    return (
        <>
            <main>
                <HeroSection id='home'></HeroSection>
                <AboutSection id='about'></AboutSection>
                <TechnologiesSection id='technologies'></TechnologiesSection>
                <ExperienceSection id='experience'></ExperienceSection>
                <ProyectSection id='projects'></ProyectSection>
                <EducationSection id='education'></EducationSection>
            </main>
        </>
    )
}
