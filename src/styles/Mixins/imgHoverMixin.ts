import { css } from "styled-components";

export const imgHoverMixin = css`
  &:hover {
    box-shadow: 0px 0px 6px -1px var(--background-secondary);
    -webkit-box-shadow: 0px 0px 6px -1px var(--background-secondary);
    -moz-box-shadow: 0px 0px 6px -1px var(--background-secondary);
    filter: saturate(200%);
  }
`;
