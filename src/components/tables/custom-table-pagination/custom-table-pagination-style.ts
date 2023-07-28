import styled, { css } from 'styled-components';
import media from 'styled-media-query';

interface IIconParams {
  gradeRotate?: string;
  disabled: boolean;
}

interface ILabelNumberParams {
  isSelected: boolean;
}
export const TableFooter = styled.div`
  ${() => css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 2rem;

    ${media.lessThan('medium')`
        
            flex-direction: column;
            justify-content: center;
            align-items:center;
        `}
  `}
`;

export const FooterPageLabel = styled.div`
  ${() => css`
    display: flex;

    ${media.lessThan('medium')`
        
        display:none;

    `}
  `}
`;

export const FooterPageActions = styled.div`
  ${() => css`
    display: flex;
    flex-direction: row;
  `}
`;

export const Iconimg = styled.img<IIconParams>`
  ${({ theme, gradeRotate, disabled }) => css`
    ${gradeRotate &&
    css`
      transform: rotate(${gradeRotate});
    `}
    cursor:pointer;

    ${disabled &&
    css`
      filter: ${theme.img.inactiveFilter};
    `}
  `}
`;

export const NumberContainer = styled.div`
  ${() => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    div {
      cursor: pointer;
    }
  `}
`;

export const LabelNumber = styled.div<ILabelNumberParams>`
  ${({ theme, isSelected }) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 10px;
    cursor: pointer;
    border-radius: 10px;
    width: 40px;
    height: 40px;
    background-color: white;
    font-size: 14px;
    ${isSelected &&
    css`
      color: white;
      background-color: #2f506d;
    `}
  `}
`;
