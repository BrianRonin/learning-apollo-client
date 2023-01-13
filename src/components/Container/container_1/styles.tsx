import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { Custom } from '.'

export const Inside = styled.div<Custom>`
  ${({ theme, boxShadowOnHover }) => css`
    --box-shadow: ${theme.name === 'default'
      ? theme.colors.bg[3]
      : theme.colors.bg[2]
    };
    --hv-box-shadow: ${theme.name === 'default'
      ? theme.colors[boxShadowOnHover ?? 'bg'][4]
      : theme.colors[boxShadowOnHover ?? 'primary'][4]
    };
    background: ${theme.colors.bg[0]};
    padding: ${theme.spacings.medium};
    width: 100%;
    border-radius: 3rem;
    box-shadow: 0 0.2rem 1rem var(--box-shadow);
    border: 0.1rem solid ${theme.colors.bg[0]};
    transition: all 300ms ease-in-out;
    position: relative;
    overflow: hidden;
    &:hover {
      box-shadow: 0 0 1rem var(--hv-box-shadow);
    }
  `}
`

export const Main = styled.div`
  display: flex;
  justify-content: center;
`
