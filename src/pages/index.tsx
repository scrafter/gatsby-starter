import React from 'react';
import MainMenu from '@/components/MainMenu/MainMenu';
import { MainMenuStyled } from '@/pages/index.styles';
import emotionReset from 'emotion-reset';
import { Global, css } from '@emotion/react';
import SEO from '@/components/SEO/SEO';
import useTranslation from '@/intl/useTranslation';

export default function Home() {
  const { lang, translate } = useTranslation();

  return (
    <>
      <SEO title={translate(`pageTitle`)} lang={lang} />
      <MainMenuStyled>
        <Global
          styles={css`
            ${emotionReset}

            *, *::after, *::before {
              box-sizing: border-box;
              -moz-osx-font-smoothing: grayscale;
              -webkit-font-smoothing: antialiased;
              font-smoothing: antialiased;
            }
          `}
        />
        <MainMenu />
      </MainMenuStyled>
    </>
  );
}
