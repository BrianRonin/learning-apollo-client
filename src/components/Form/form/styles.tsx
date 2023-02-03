
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { CSS_ScrollBar } from '../../../styles/css/scrollbar/scrollbar_1.css'
import { Main as Button } from '../../Button/button_0/styles'
import { Inside, Main as Container } from '../../Container/container_1/styles'

export const Main = styled.form`
  ${({ theme }) => css`
    .submit-button {
      width: 100%;
    }
    ${Container} {
      ${Inside} {
        /* width: 1; */
      }
    }
    .top-buttons {
      margin-bottom: 4rem;
    }

    width: 50rem;
    height: 100%;
    padding: 2rem;
    overflow-y: auto;

    .container-button {
      display: flex;
      justify-content: center;
      gap: 3rem;
      margin-top: 0rem;
    }

    .content-form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 0 !important;
    }

    .error-message {
      li {
        margin-top: 1rem;
        padding: 0.5rem;
        background: ${theme.colors.bg[1]};
        color: ${theme.colors.warning[4]};
        margin: 10px 0;
      }
    }

    ${CSS_ScrollBar(theme)}

    @media ${theme.media.lMedium} {
      justify-content: center;
      align-items: center;
      padding: 10vw;
      width: 100%;
    }

    @media ${theme.media.lSmallest} {
      button {
        font-size: medium;
      }
      margin-top: 3rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  `}
`
