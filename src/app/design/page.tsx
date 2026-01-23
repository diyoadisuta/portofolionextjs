'use client';

import { useState, useEffect } from 'react';
import HeroDesign from '@/components/design/HeroDesign';
import AboutDesign from '@/components/design/AboutDesign';
import SkillsDesign from '@/components/design/SkillsDesign';
import ProjectsDesign from '@/components/design/ProjectsDesign';
import ExperienceDesign from '@/components/design/ExperienceDesign';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Dock from '@/components/Dock';
import ThemeToggle from '@/components/ThemeToggle';
import ScrollProgress from '@/components/ScrollProgress';
import PortfolioSwitch from '@/components/PortfolioSwitch';

export default function DesignPortfolio() {
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'contact'];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="min-h-screen bg-[#F4F1DE] dark:bg-black relative overflow-hidden pb-24 transition-colors duration-300">
            <ScrollProgress />
            <ThemeToggle />
            <PortfolioSwitch currentPage="design" />

            {/* Additional background elements - Design themed */}
            <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-pink-100/20 via-transparent to-transparent pointer-events-none"></div>
            <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-orange-100/20 via-transparent to-transparent pointer-events-none"></div>

            <Dock activeSection={activeSection} scrollToSection={scrollToSection} />

            <main>
                <HeroDesign />
                <AboutDesign />
                <SkillsDesign />
                <ProjectsDesign />
                <ExperienceDesign />
                <Education />
                <Contact />
            </main>

            <Footer />
        </div>
    );
}
