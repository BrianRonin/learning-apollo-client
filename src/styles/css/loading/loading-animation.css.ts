import { css, Theme } from "@emotion/react"

type loadingAnimationSettings = {
  duration: string
  color: string
  size: string
}

export const loadingAnimation = (theme: Theme, settings: loadingAnimationSettings) => css`
  content:"";
  @keyframes loading {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  --size-loading: ${settings.size};


  width: var(--size-loading);
  height: var(--size-loading);
  position: absolute;
  border-top: solid 2px ${settings.color};
  border-radius: 50%;
  animation: loading ${settings.duration} infinite linear;
`
