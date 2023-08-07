import styled, { css } from 'styled-components';
import media from 'styled-media-query';

type AsideProps = {
  isOpen: boolean;
};

type AsideItemProps = {
  isFocused: boolean;
  marginLeft?: string;
};
type TemplateMenuProps = {
  isChangedTemplate: boolean;
};

type OpenSearchMenuProps = {
  isOpen: boolean;
  showOption: boolean;
  searchMenusLength: number;
};

type MenuBranchProps = {
  isSelected: boolean;
};
export const MainContainer = styled.aside<AsideProps>`
  ${({ isOpen, theme }) => css`
    position: fixed;
    bottom: 0;

    height: 100vh;
    left: -999vw;
    height: calc(100vh - 5rem);
    z-index: 9999999;
    width: 300px;
    background-color: ${theme.customColors.main};

    ${isOpen &&
    css`
      transform: translateX(0);
      left: 0;
    `};

    ${media.greaterThan('large')`
      left: 0;
      max-width:70vw;

  `}
  `}
`;

export const MainMenu = styled.div`
  ${() => css`
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    overflow: auto;
    width: 100%;
    height: calc(100vh - 5rem);
    padding-top: 3rem;
    ${media.greaterThan('large')`
            .label {
                display: flex;
            }
        `};
  `}
`;
export const StaticContentWrapper = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    margin-top: 5px;
    margin-bottom: 5px;
    gap: 1rem;
    background-color: red;
  `}
`;
export const Divider = styled.div`
  ${() => css`
    border-bottom: 1px solid #514f52;
    flex-grow: 0;
    width: 70%;
  `}
`;

export const MainMenuItem = styled.div<AsideItemProps>`
  ${({ isFocused, marginLeft, theme }) => css`
    color: black;
    padding: 1rem 1rem 1rem 1rem;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    ${marginLeft &&
    css`
      margin-left: ${marginLeft};
    `}
    border-radius: 4px;
    p,
    span {
      color: black;
      cursor: pointer;
      display: flex;
      font-size: 1rem;
      font-weight: 500;
      gap: 1rem;
      height: 100%;
      width: 100%;
      padding: 0;

      span {
        align-items: center;
        color: black;
        cursor: pointer;
        display: flex;
        font-size: 1rem;
        font-weight: 400;
        gap: 1.2rem;
        height: 22px !important;
        width: 100%;
      }
    }
    .icon {
      height: 22px;

      ${media.greaterThan('large')`
                width: 22px !important;
                height: 22px !important;
            `}
      display: flex;
      align-items: center;

      width: 2.1rem;
      height: 2.1rem;
      img {
        width: 2.1rem;
        height: 2.1rem;
      }
    }

    .label {
      display: flex;
      justify-content: flex-start;
    }

    ${!isFocused &&
    css`
      :hover {
        background-color: blue;
      }
    `}

    ${isFocused &&
    css`
      background-color: blue;

      p {
        height: 100% span {
          color: black;
        }

        background-color: white;
      }
    `}

        ${media.greaterThan('large')`
            span {
                display: none;
            }
        `}
  `}
`;

export const MenuSelectBranch = styled.div`
  ${() => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: white;
    padding-top: 3rem;
    gap: 5rem;
    width: 100%;
    min-height: 10rem;
  `}
`;

export const MenuBranchItens = styled.div<MenuBranchProps>`
  ${({ theme, isSelected }) => css`
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;
    gap: 1rem;
    color: ${theme.colors.secondaryLabelCollor};
    font-size: ${theme.font.sizes.xxsmall};
    height: 10rem;
    cursor: pointer;
    img {
      width: 32px;
      height: 30.67px;
      filter: invert(66%) sepia(0%) saturate(5401%) hue-rotate(351deg)
        brightness(100%) contrast(94%);
    }
    ${isSelected &&
    css`
      color: ${theme.colors.secondary};
    `}
  `}
`;
export const MainLogoContainer = styled.div`
  ${() => css`
    align-items: center;
    display: flex;
    position: relative;
    justify-content: center;
    background-color: white;
    height: 10rem;
    width: 100%;
    padding: 0rem 6rem 0rem 6rem;
    background-color: white;

    ${media.greaterThan('large')`
            padding: 0rem 6rem 0rem 6rem;
           
        `}
    img {
      height: 52px;
      width: 141.27px;
      filter: brightness(0) invert(1);
      position: fixed;
      z-index: 9999;
    }
  `}
`;

export const MenuLogo = styled.img``;
