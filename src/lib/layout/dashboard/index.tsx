import React, { useState } from 'react';

import * as S from './layout-styles';
import { MainMenuComponent } from './components/main-menu';
import { Navbar } from './components/navbar';

type LayoutProps = {
  children?: React.ReactNode;
};

export const DashboardLayout = ({ children }: LayoutProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenu = () => {
    setMobileMenuOpen((prevState) => !prevState);
  };

  return (
    <S.Wrapper isMobileMenuOpen={mobileMenuOpen}>
      <Navbar
        isMobileMenuOpen={mobileMenuOpen}
        handleMobileMenu={handleMobileMenu}
      />
      <MainMenuComponent
        isMobileMenuOpen={mobileMenuOpen}
        handleMobileMenu={handleMobileMenu}
      />
      <S.SectionWrapper>
        <S.Section>{children}</S.Section>
      </S.SectionWrapper>
    </S.Wrapper>
  );
};
