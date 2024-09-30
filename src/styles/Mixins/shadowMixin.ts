import { css } from "styled-components";

export const shadowMixin = css`
  box-shadow: 0px 0px 49px 11px var(--background);
  -webkit-box-shadow: 0px 0px 49px 11px var(--background);
  -moz-box-shadow: 0px 0px 49px 11px var(--background);
  border-radius: 15%;
  background-color: var(--background);
`;
