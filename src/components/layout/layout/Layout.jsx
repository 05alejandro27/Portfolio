import { AboutSection } from '../../sections/aboutSection/AboutSection'
import { ExperienceSection } from '../../sections/experienceSection/ExperienceSection'
import { HeroSection } from '../../sections/heroSection/HeroSection'
import { TechnologiesSection } from '../../sections/technologiesSection/TechnologiesSection'
import './layout.css'

export const Layout = () => {
    return (
        <>
            <main>
                <HeroSection></HeroSection>
                <AboutSection></AboutSection>
                <TechnologiesSection></TechnologiesSection>
                <ExperienceSection></ExperienceSection>
            </main>
        </>
    )
}
