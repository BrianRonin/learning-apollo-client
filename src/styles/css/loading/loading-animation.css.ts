import { css, Theme } from "@emotion/react"

type loadingAnimationSettings = {
  duration: string
  color: string
  size: string
}

export const loadingAnimation = (theme: Theme, settings: loadingAnimationSettings) => css`
  @keyframes loading {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  --size-loading: ${settings.size};

  position: absolute;
  right: 2rem;
  width: var(--size-loading);
  height: var(--size-loading);
  content:"";
  position: absolute;
  border-top: solid 2px ${settings.color};
  border-radius: 50%;
  animation: loading ${settings.duration} infinite linear;
`
