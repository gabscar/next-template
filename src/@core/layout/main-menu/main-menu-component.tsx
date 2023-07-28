import { useEffect, useRef } from 'react';
import Image from 'next/image';

import * as S from './main-menu-component.styles';

import { dashboardLinks, IDashboardLink } from './menu-itens';
import Link from 'next/link';
import { useRouter } from 'next/router';
type MainMenuProps = {
  isMobileMenuOpen: boolean;
  handleMobileMenu: () => void;
};

export const MainMenuComponent = ({
  isMobileMenuOpen,
  handleMobileMenu,
}: MainMenuProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { pathname } = useRouter();
  console.log(isMobileMenuOpen);
  useEffect(() => {
    const handleOutsideClick = (e: any) => {
      if (isMobileMenuOpen && ref.current && !ref.current.contains(e.target)) {
        handleMobileMenu();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isMobileMenuOpen]);

  const getMenuContent = () => {
    return (
      <>
        <S.StaticContentWrapper>
          {dashboardLinks.map((link) => getStaticDashboardLink(link))}
        </S.StaticContentWrapper>
      </>
    );
  };
  const getStaticDashboardLink = (link: IDashboardLink) => {
    return (
      <S.MainMenuItem
        key={link.url}
        isFocused={pathname.includes(link.url)}
        onClick={() => {
          if (isMobileMenuOpen) {
            handleMobileMenu();
          }
        }}
        className="menu-item"
      >
        <Link
          href={link.url}
          rel="noopener noreferrer"
          target={link.label === 'Atendimento' ? '_blank' : ''}
        >
          <p>
            <span className="icon">
              <Image src={link.icon} alt={`icon ${link.label}`} />
            </span>
            <span className="label">{link.label}</span>
          </p>
        </Link>
      </S.MainMenuItem>
    );
  };

  return (
    <S.MainContainer isOpen={isMobileMenuOpen} ref={ref}>
      <S.MainLogoContainer>p</S.MainLogoContainer>
      {getMenuContent()}
    </S.MainContainer>
  );
};
