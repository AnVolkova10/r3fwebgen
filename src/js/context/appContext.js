import React, { createContext, useEffect, useState } from 'react';
// import playaDesktopBkg from 'ASSETS/images/FONDO_playa_desktop.jpg';
// import campoDesktopBkg from 'ASSETS/images/FONDO_campo_desktop.jpg';
// import ciudadDesktopBkg from 'ASSETS/images/FONDO_ciudad_desktop.jpg';
// import getTranslation from './translations';

const initialContext = {
  appState: {
    currentStep: 0,
    // lenguaje: null,
    // errorVideo: false,
    // showIframe: false,
    // postImg: false,
    // stopLoadingBar: true,
  },
  setAppState: () => null,
};

export const AppContext = createContext(initialContext);

export const ContextProviderApp = (props) => {
  const [appState, setAppState] = useState({
    currentStep: 0,
    // lenguaje: null,
    // errorVideo: false,
    // showIframe: false,
    // postImg: false,
    // stopLoadingBar: true,
  });

  const goToStep = function (stepIndex) {
    setAppState((prevState) => ({
      ...prevState,
      currentStep: stepIndex,
    }));
  };

  useEffect(() => {
    console.log('current step', appState.currentStep);
  }, [appState.currentStep]);

  // const animationLoadingBar = function (value) {
  //     setAppState((prevState) => ({
  //         ...prevState,
  //         stopLoadingBar: value,
  //     }));
  // };

  // const cleanStorage = () => {
  //     localStorage.removeItem('photoIsReady');
  //     localStorage.removeItem('photo');
  // };

  // useEffect(() => console.log(userState, appState), [userState, appState]);

  // Aca se pasaba tambien el fondo de mobile, pero como las dimensiones de ambos
  // fondos son iguales, solo paso desktop
  // const scenes = {
  //     playa: {
  //         desktopBkg: playaDesktopBkg,
  //     },
  //     ciudad: {
  //         desktopBkg: ciudadDesktopBkg,
  //     },
  //     campo: {
  //         desktopBkg: campoDesktopBkg,
  //     },
  // };

  return (
    <AppContext.Provider
      value={{
        appState,
        setAppState,
        // getTranslation(key, step, templateArgs) {
        //     return getTranslation({
        //         language: appState.lenguaje,
        //         key,
        //         step,
        //         templateArgs,
        //     });
        // },
        goToStep,
        // setLanguage(lenguaje) {
        //     setAppState((prevState) => ({
        //         ...prevState,
        //         lenguaje,
        //     }));
        // },
        // getCurrentSceneImages() {
        //     return scenes?.[userState.scene];
        // },
        // cleanStorage,
        // animationLoadingBar,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
export default ContextProviderApp;
