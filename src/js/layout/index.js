import React, {  useContext, useState, useEffect } from 'react';
import './style.scss';
import { AnimatePresence } from 'framer-motion';
import { FadeInOut } from 'HELPERS/framer-animations';
import { AppContext } from '../context/appContext';
import {  StepContent,  Root, HeaderBlock, PositionContainer, Text, Content, LogoGenoshaContainer,
  LayoutBackgroundContainer, HeaderBlockContent, StepShareBg, ModalContainer } from './layoutStyle';
import Background from '../../assets/images/bg.jpg';

export const DefaultLayout = ({ children }) => {
  const { appState } = useContext(AppContext);
  
  const backgroundAnimProps = {
    entryTransition: { duration: 1 },
    exitTransition: { duration: 1 },
    blur: false,
    animateY: false,
    isNested: false,
    containerProps: {
      style: {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
      },
    },
  };

  return (
    <Root>
      <Content>
        <LayoutBackgroundContainer>
          <AnimatePresence>
            {appState.currentStep === 0 && (
              <FadeInOut key='StepShareBg' {...backgroundAnimProps}>
                <StepShareBg
                  desktopBg={Background}
                  mobileBg={Background}
                ></StepShareBg>
              </FadeInOut>
            )}
          </AnimatePresence>
          <div className='background-overlay'></div>
        </LayoutBackgroundContainer>
      <HeaderBlock>
          <FadeInOut
            component={LogoGenoshaContainer}
            isVisible={true}
            animatePresence={true}
          >
            <span style={{ fontSize: '30px' }}>GENOSHA</span>
            
          </FadeInOut>
        </HeaderBlock>
        <StepContent>{children}</StepContent>
      </Content>
    </Root>
  );
};

const LayoutWrapper = (props) => (
  <DefaultLayout {...props}>{props.children}</DefaultLayout>
);

export default LayoutWrapper;
