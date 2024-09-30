import { useSection } from '../../context/SectionContext';

export const withCurrentSectionName = <T,>(WrappedComponent: React.ComponentType<T>) => {
    return (props: Omit<T, '$currentSectionName'>) => {
        const { currentSectionName } = useSection();
        return <WrappedComponent {...(props as T)} $currentSectionName={currentSectionName} />;
    };
};