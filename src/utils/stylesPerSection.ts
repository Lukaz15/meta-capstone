// Helper function to determine the style of an element based on the currently loaded section.
// This function must be used only with React components that utilize the "withCurrentSectionName" hook.

import { css } from "styled-components";
import { SectionNames, cssString } from "../custom_types/customTypes";

type SectionIndexName = Exclude<SectionNames, undefined> | "default";

// Takes an object where each key is of type SectionIndexName and each value is a cssString (the return type of the "css" method from styled-components).
export const stylesPerSection = (styles: {
  [key in SectionIndexName]?: cssString;
}): cssString => {
  return css<{ $currentSectionName?: SectionIndexName }>`
    ${({ $currentSectionName }) =>
      styles[$currentSectionName ? $currentSectionName : "default"]}
  `;
};
