import { useSection } from "../../context/SectionContext";

export const withNavigationTo = <T,>(WrappedComponent: React.ComponentType<T>) => {
    return (props: Omit<T, '$currentSectionName'>) => {
        const { goToSection } = useSection();
        return <WrappedComponent {...(props as T)} $goToSection={goToSection} />;
    };
}