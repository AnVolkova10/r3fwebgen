import React, { useContext } from 'react';
import Button from 'COMPONENTS/Button/button';
import { FadeInOut, Staggers } from 'HELPERS/framer-animations';
import { AppContext } from '../../context/appContext';
// import Icon from '../Icons';
import {
  Container,
  // Text,
  BtnsContainer,
  ButtonContainer,
} from './stepIntroStyles';
// import IntroAudio from '../../../assets/audios/01-first-open.mp3';

const StepIntro = () => {
  const {
    // appState,
    // setAppState,
    goToStep,
    // setLanguage,
    // cleanStorage,
  } = useContext(AppContext);

  // useEffect(() => {
  //     cleanStorage();
  //     localStorage.removeItem('character');
  // }, []);

  // const finishStep = function (language) {
  //     // const audio = document.getElementById('audio-intro');
  //     // audio.play();
  //     // setLanguage(language);
  //     // localStorage.setItem('language', language);
  //     goToStep(appState.currentStep + 1);
  // };

  return (
    <Staggers
      key='StepIntro'
      component={Container}
      isNested={true}
      visibleStaggers={0.2}
    >
      {/* <FadeInOut isNested={true} key="icon">
                <FontierIconContainer>
                    <Icon name="nissanFrontier" />
                </FontierIconContainer>
            </FadeInOut> */}
      <FadeInOut
        component={BtnsContainer}
        element={'div'}
        isNested={true}
        key='btnsContainers'
      >
        <ButtonContainer onClick={() => goToStep(1)}>
          <Button>COMENZAR</Button>
        </ButtonContainer>
      </FadeInOut>
    </Staggers>
  );
};

export default StepIntro;
