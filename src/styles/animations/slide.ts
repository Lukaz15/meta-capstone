import { keyframes, css } from "styled-components";
import { AnimationState } from "../../custom_types/customTypes";

const leaving_left = keyframes`
    from {
        transform: translateX(0%) scale(100%);
        filter: opacity(90%);
    }

    to {
        transform: translateX(-50%) scale(5%);
        filter: opacity(0%);
    }
`;

const leaving_right = keyframes`
    from {
        transform: translate(0%) scale(100%);
        filter: opacity(90%);
    }

    to {
        transform: translate(50%) scale(5%);
        filter: opacity(0%);
    }
`;

const entering_left = keyframes`
    from {
        transform: translate(-50%) scale(5%);
        filter: opacity(0%);
    }

    to {
        transform: translate(0%) scale(100%);
        filter: opacity(90%);
    }
`;

const entering_right = keyframes`
    from {
        transform: translate(50%) scale(5%);
        filter: opacity(0%);
    }

    to {
        transform: translate(0%) scale(100%);
        filter: opacity(90%);
    }
`;

export const slide = css<{ $animationState?: AnimationState }>`
  animation: 0.5s 0s forwards
    ${({ $animationState }) =>
      $animationState?.direction != undefined &&
      $animationState.leaving != undefined
        ? $animationState.leaving
          ? $animationState.direction === "left"
            ? leaving_left
            : leaving_right
          : $animationState.direction === "left"
          ? entering_left
          : entering_right
        : "none"};
`;
