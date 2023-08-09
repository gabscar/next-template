import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const LayoutWrapper = styled.div`
  ${() => css`
    max-height: 100vh;
    display: flex;
    min-height: 100vh;
  `}

  ${media.lessThan('medium')`
    padding-top: 4rem;
    justify-content: center;
    align-items: center;
  `}
`;

export const Container = styled.div`
  ${() => css`
    flex: 1;
    display: flex;
    flex-direction: column;
    color: black;
    align-items: center;
    justify-content: center;
    & > div {
      padding: 2rem;
    }
    h1 {
      margin-bottom: 8px;
      font-size: 40px;
    }
    ${media.lessThan('large')`
      display:flex;
      justify-content:center;
      width: 100vw;
      height: 100vh;
      & > div {
          
          height: 100vh;
      }
      h1 {
          margin-bottom: 8px;
          font-size: 22px;
      }
      h3 {
          font-size: 14px;
      }
    `}
    ${media.lessThan('medium')`
      & > div {
            height: 100vh;
            width: 70vw;
        }
    `}

    a {
      text-decoration: underline;
    }

    button {
      border-radius: 1rem;
    }

    form {
      display: flex;
      flex-direction: column;
    }
  `}
`;
export const ContainerImage = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  img {
    width: 100.1825180053711px;
    height: 100px;
  }
  ${media.lessThan('large')`
        margin-top: 0rem;
        margin-bottom: 3rem;
        display: flex;
        align-items:center;
        justify-content:center;
        img {
           width: 140px;
           height: 50px;
        }
    `}
`;
