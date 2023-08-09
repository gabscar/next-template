import { ReactNode } from 'react';
import { SideBanner } from './components/side-banner';
import * as S from './styles';

export interface IAuthTemplateWrapper {
  title: string;
  children: ReactNode;
}
export const AuthTemplateWrapper = (params: IAuthTemplateWrapper) => {
  return (
    <S.LayoutWrapper>
      <S.Container>
        <div>
          <S.ContainerImage>
            {/* <img src={logo.src} alt="logo" /> */}
          </S.ContainerImage>
          <h1>{params.title}</h1>
          {params.children}
        </div>
      </S.Container>
      <SideBanner />
    </S.LayoutWrapper>
  );
};
