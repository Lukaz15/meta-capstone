import { createContext, useState, ReactNode, useContext, ReactElement, useLayoutEffect, useRef } from 'react';
import { Home } from '../components/sections';
import { SectionComponent, SectionNames, SectionContextType, AnimationState } from '../custom_types/customTypes';


const SectionContext = createContext<SectionContextType | undefined>(undefined)

export const SectionProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [currentSection, setCurrentSection] = useState<ReactElement | null>(<Home />);
    const [nextSection, setNextSection] = useState<ReactElement | null>(null)
    const currentSectionName: SectionNames = (currentSection?.type as SectionComponent).name
    const sectionRef = useRef<HTMLElement | null>(null)
    const [animationState, setAnimationState] = useState<AnimationState>({
        leaving: undefined,
        direction: undefined
    });


    const goToSection = (section: ReactElement): void => {
        const currentIndex = (currentSection?.type as SectionComponent).index
        const nextIndex = (section?.type as SectionComponent).index
        setAnimationState({ leaving: true, direction: currentIndex < nextIndex ? "left" : currentIndex > nextIndex ? "right" : undefined })
        setNextSection(section != currentSection ? section : null)
    }

    useLayoutEffect((): void | (() => void) => {
        const animationEnd = (): void => {
            setAnimationState({ leaving: false, direction: animationState.direction === "left" ? "right" : "left" })
            nextSection ? setCurrentSection(nextSection) : undefined
        }

        sectionRef.current?.addEventListener('animationend', animationEnd)

        return () => {
            sectionRef.current?.removeEventListener('animationend', animationEnd)
        }

    }, [nextSection])

    return (
        <SectionContext.Provider value={{ currentSection, currentSectionName, goToSection, sectionRef, animationState }}>
            {children}
        </SectionContext.Provider>
    )

}

export const useSection = () => {
    const context = useContext(SectionContext)
    if (context) {
        return context
    } else {
        throw new Error('useSection must be used within SectionProvider')
    }
}