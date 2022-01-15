import React from 'react';
import useTranslation from '@/intl/useTranslation';
import { MenuStyled, MenuItemStyled } from './MainMenu.styles';

function MainMenu() {
  const { translate } = useTranslation();
  return (
    <MenuStyled>
      <MenuItemStyled>{translate(`menu.main`)}</MenuItemStyled>
    </MenuStyled>
  );
}

export default MainMenu;
