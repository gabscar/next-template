import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
  min-height: 700px;
  ${media.lessThan('large')`
    display: none;
  `}
`;

export const BannerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: flex-start;
  height: 100%;
  width: 100%;
  overflow: hidden;
  justify-content: end;
  background-color: white;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-bottom-left-radius: 10%;

  p {
    line-height: 2.4rem;
    max-width: 34.2rem;
    margin-bottom: 4rem;
    color: white;
  }
`;
