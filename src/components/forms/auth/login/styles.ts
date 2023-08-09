import { css, styled } from 'styled-components';

export const FormContainer = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 100%;
    margin-bottom: 1rem;
  `}
`;
