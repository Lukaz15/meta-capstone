import * as sections from "../components/sections";
import { css } from "styled-components";

export type SectionNames = keyof typeof sections | undefined;

export type cssString = ReturnType<typeof css>;

type goToSectionType = (section: number) => void;

export interface SectionComponent extends React.FC {
  index: number;
  name?: SectionNames;
}

export interface ElementBase {
  $currentSectionName?: SectionNames;
  children?: string | React.ReactNode;
}
export interface navigationBase extends ElementBase {
  $goToSection?: goToSectionType;
  $to: number;
}

export interface SectionContextType {
  currentSection: React.ReactElement | null;
  currentSectionName: SectionNames;
  goToSection: goToSectionType;
  sectionRef: React.MutableRefObject<HTMLElement | null>;
  animationState: AnimationState;
}

export interface AnimationState {
  leaving: boolean | undefined;
  direction: "left" | "right" | undefined;
}
