import styled, { css } from 'styled-components';
import media from 'styled-media-query';

type WrapperProps = {
  isMobileMenuOpen: boolean;
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ isMobileMenuOpen }) => css`
    ${isMobileMenuOpen &&
    css`
      transition: all 0.2s;
      overflow-x: hidden;
      height: 100vh;
      width: 100vw;
      background-color: transparent;
    `}
  `}
`;
export const Section = styled.section`
  ${() => css`
    background-color: transparent;
    min-height: calc(100vh - 10rem);
    width: 100%;
    padding: 0rem;
    overflow: auto;
    display: flex;
    justify-content: center;
    ${media.lessThan('small')`
            margin-bottom:0rem;
        `}
  `}
`;
export const SectionWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: #f9fafa;
  padding: 0rem;
  ${media.greaterThan('large')`
      min-height: calc(100vh - 20rem);
      width: calc(100vw - 40rem);
      margin-left: 28rem;
    `}
`;

export const Backdrop = styled.div`
  ${() => css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 1;
  `}
`;
