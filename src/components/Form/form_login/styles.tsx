import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { CSS_ScrollBar } from '../../../styles/css/scrollbar/scrollbar_0.css'
import {Main as Button} from '../../Button/button_0/styles'
export const Main = styled.form`
  ${({ theme }) => css`
    .submit-button {
      width: 100%;
    }
    .top-buttons {
      margin-bottom: 4rem;
    }
    padding: 2rem;
    height: 100%;
    overflow-y: auto;
    ${CSS_ScrollBar(theme)}

    @media ${theme.media.lMedium} {
    }
    @media ${theme.media.lSmallest} {
      ${Button} {
        font-size: medium;
      }
      margin-top: 3rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  `}
`
export const ContainerButton = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    gap: 3rem;
    margin-top: 0rem;
    @media ${theme.media.lMedium} {

    }
  `}
`
export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const ErrorMessage = styled.p`
  ${({ theme }) => css`
    margin-top: 1rem;
    padding: 0.5rem;
    background: ${theme.colors.bg[1]};
    color: ${theme.colors.warning[4]};
  `}
`
