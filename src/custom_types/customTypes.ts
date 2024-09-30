import * as sections from "../components/sections";

export type SectionNames = keyof typeof sections | undefined;

export interface SectionComponent extends React.FC {
  index: number;
  name?: SectionNames;
}

export interface ElementBase {
  $currentSectionName?: SectionNames;
  children?: string | React.ReactNode;
}

export interface SectionContextType {
  currentSection: React.ReactElement | null;
  currentSectionName: SectionNames;
  goToSection: (section: React.ReactElement) => void;
  sectionRef: React.MutableRefObject<HTMLElement | null>;
  animationState: AnimationState;
}

export interface AnimationState {
  leaving: boolean | undefined;
  direction: "left" | "right" | undefined;
}
