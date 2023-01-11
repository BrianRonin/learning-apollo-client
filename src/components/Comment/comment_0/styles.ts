import { Main as Container } from '../../Container/container_1/styles'
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import {lighten} from 'polished'

export const Main = styled.div`
  ${({ theme }) => css`
    ${Container} {
      margin: ${theme.spacings.medium} ${theme.spacings.xhero};
      text-align: start;
    }
  `}
`;

export const CommentMeta = styled.div`
  ${({ theme }) => css`
    > span {
      margin-right: ${theme.spacings.xsmall};
    }
  `}
`;

export const CommentMetaItem = styled.span`
  ${({ theme }) => css`
    font-weight: ${theme.fonts.weight.bold};
    margin-right: ${theme.spacings.xsmall};
  `}
`;

export const CommentBody = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.xsmall} 0;
  `}
`;
