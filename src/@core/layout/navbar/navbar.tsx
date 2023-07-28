import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

import * as S from './navbar-styles';

import { next, menuIcon } from '@core/assets';

type NavBarProps = {
  isMobileMenuOpen: boolean;
  handleMobileMenu: () => void;
  refresher?: boolean;
};

export const Navbar = ({ isMobileMenuOpen, handleMobileMenu }: NavBarProps) => {
  const ref = useRef<HTMLButtonElement>(null);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  const getLogo = () => {
    return (
      <S.MainLogoContainer>
        <S.Logo src={next.src} />
      </S.MainLogoContainer>
    );
  };

  return (
    mounted && (
      <S.NavbarWrapper className="app-content">
        <S.Content isOpen={isMobileMenuOpen}>
          <span className="mobile">
            <img
              src={menuIcon.src}
              color="#4c4e64"
              onClick={() => handleMobileMenu()}
              alt="mobile-menu"
            />
          </span>
          {getLogo()}
          <S.ButtonsContainer>
            <S.MenuButton
              ref={ref}
              onClick={(event: any) => {
                event.preventDefault();
              }}
            >
              sair
            </S.MenuButton>
          </S.ButtonsContainer>
        </S.Content>
      </S.NavbarWrapper>
    )
  );
};
