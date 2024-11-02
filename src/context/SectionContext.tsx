import { createContext, useState, ReactNode, useContext, useLayoutEffect, useRef } from 'react';
import * as sections from '../components/sections';
import { SectionComponent, SectionNames, SectionContextType, AnimationState } from '../custom_types/customTypes';


const SectionContext = createContext<SectionContextType | undefined>(undefined)

export const SectionProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

    const [currentSection, setCurrentSection] = useState<React.ReactElement | null>(<sections.Home />);
    const [nextSectioIndex, setNextSectioIndex] = useState<number | null>(null)
    const currentSectionName: SectionNames = (currentSection?.type as SectionComponent).name
    const sectionRef = useRef<HTMLElement | null>(null)
    const [cooldown, setCooldown] = useState<boolean>(true)
    const [animationState, setAnimationState] = useState<AnimationState>({
        leaving: undefined,
        direction: undefined
    });
    // Sorts the sections in numerical order and assing its indexes to an array.
    const orderedSections = Object.values(sections).sort(
        (a, b) => (a.index) - (b.index)
    ) as SectionComponent[];
    const sectionIndexes: number[] = orderedSections.map((c) => c.index)

    const goToSection = (index: number): void => {
        // Checks if the index passed is valid.
        if (!sectionIndexes.includes(index)) {
            throw new Error(`${index} is not a valid index. Valid indexes: ${sectionIndexes}`)
        }
        if (cooldown) {
            setCooldown(false)
            const currentIndex = (currentSection?.type as SectionComponent).index
            setAnimationState({ leaving: true, direction: currentIndex < index ? "left" : currentIndex > index ? "right" : undefined })
            setNextSectioIndex(orderedSections[index].index != currentIndex ? orderedSections[index].index : null)
        }

    }

    useLayoutEffect((): void | (() => void) => {
        const animationEnd = (): void => {
            setAnimationState({ leaving: false, direction: animationState.direction === "left" ? "right" : "left" })
            setTimeout(() => { setCooldown(true) }, 450)
            // Filters the section by index to render it as a React Element.
            const NextSectionComponent = orderedSections.filter((c) => c.index === nextSectioIndex)[0]
            NextSectionComponent ? setCurrentSection(<NextSectionComponent />) : undefined
        }

        sectionRef.current?.addEventListener('animationend', animationEnd)

        return () => {
            sectionRef.current?.removeEventListener('animationend', animationEnd)
        }

    }, [nextSectioIndex])

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