import { css, Theme } from "@emotion/react";
import { loadingAnimation } from "./loading/loading-animation.css";


export const loadingAnimationSidebar = (theme: Theme) => css`
  &:after{
    ${loadingAnimation(theme,
      {
        duration: '500ms',
        color: theme.colors.primary[2],
        size: '20px'
      }
      )}
    right: 2rem;
  }
  ::before {
    ${loadingAnimation(theme,
      {
        duration: '1000ms',
        color: theme.colors.secondary[2],
        size: '20px'
      })
    }
    right: 2rem;
  }
`
