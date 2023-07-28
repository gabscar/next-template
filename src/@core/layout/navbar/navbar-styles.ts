import styled, { css } from 'styled-components';
import media from 'styled-media-query';

type ContentProps = {
  isOpen: boolean;
};

export const NavbarWrapper = styled.div`
  ${() => css`
    background-color: blue;
    position: sticky;
    top: 0;
    z-index: 999;
    padding-left: 6rem;
    padding-right: 6rem;
    width: 100vw;
    .dots-menu {
      display: none;
    }
    ${media.greaterThan('large')`
           
            padding: 0 4.8rem 0rem 0rem;
        `}
    ${media.lessThan('medium')`
            width: 100vw;
            padding: 0 3rem;
            margin:0rem;

              .dots-menu{
                display:flex
                
            }
        `}
  `}
`;

export const Content = styled.nav<ContentProps>`
  ${({ isOpen }) => css`
    align-items: center;

    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 5rem;
    .mobile {
      width: 40px;
      height: 40px;
      img {
        width: 30px;
        height: 30px;
        /* filter: brightness(0) invert(1); */
      }
    }
    ${isOpen &&
    css`
      justify-content: flex-end;

      & > span > img {
        display: none;
      }
    `}

    ${media.greaterThan('large')`
        justify-content: flex-end;

        & > span {
        display: none;
        }
    
        `}
  `}
`;

export const ButtonsContainer = styled.div`
  ${() => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 3.5rem;

    img,
    svg {
      filter: brightness(0) invert(1);
    }

    & > span {
      cursor: pointer;
    }
    ${media.lessThan('small')`
        width:100%;
    `}
  `}
`;

export const MenuButton = styled.button`
  background: none;
  background-size: contain;
  flex-direction: row;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;
  padding: 1rem;
`;

export const MenuDotsButton = styled.button`
  ${() => css`
    height: 4rem;
    background: none;
    background-size: contain;
    flex-direction: row;
    display: none;
    justify-content: center;
    align-items: center;
    gap: 3px;
    img,
    svg {
      filter: brightness(0) invert(1);
    }

    ${media.lessThan('medium')`
        display:flex;
  
  `}
  `}
`;

export const NotificationButton = styled.button`
  position: relative;
  width: fit-content;
  height: fit-content;
  background-color: transparent;
  font-size: 0;

  ${media.lessThan('medium')`
        display:none;
  
  `}
`;

export const Logo = styled.img`
  ${() => css`
    filter: brightness(0) invert(1);
    height: 8rem;
    width: 15.625rem;
    position: fixed;
    top: 10px;
    z-index: 9999;

    ${media.lessThan('medium')`
            top: 20px;
        `}
  `}
`;

export const MainLogoContainer = styled.div`
  ${() => css`
    align-items: center;
    display: flex;
    position: relative;
    justify-content: flex-start;
    padding: 0rem 4rem;
    height: 4rem;
    width: 100%;
    img {
      height: 30px;
    }
    color: black;
    h1 {
      font-size: 24px;
    }

    ${media.lessThan('medium')`
            justify-content: center;
            padding: 0rem 2rem;
            h1 {
                font-size: 16px;
            }
            
            
        `}
  `}
`;
