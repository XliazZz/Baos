import React from 'react';
import { useNavBarLogic } from './hooks/useNavBarLogic';
import { MainHeader } from './components/Headers/MainHeader';
import { FixedHeader } from './components/Headers/FixedHeader';
import { OrganizationSchema } from './components/OrganizationSchema';
import ToggleContent from '../Toggle/ToggleContent';

export const NavBar = ({ handlerScrollSection, activeSection }) => {
  const {
    isScrolled,
    isMenuOpen,
    navContentProps,
    closeMenu,
    liSections
  } = useNavBarLogic(handlerScrollSection, activeSection);

  return (
    <>
      <MainHeader isScrolled={isScrolled} navContentProps={navContentProps} />
      <FixedHeader isScrolled={isScrolled} navContentProps={navContentProps} />

      {isMenuOpen && (
        <ToggleContent
          closeMenu={closeMenu}
          liSections={liSections}
          activeSection={activeSection}
          handlerScrollSection={handlerScrollSection}
        />
      )}

      <OrganizationSchema />
    </>
  );
};