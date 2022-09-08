import styled from 'styled-components';

export const Root = styled.div`
  min-height: var(--app-height);
  overflow-y: auto;
  position: relative;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  min-height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const LayoutBackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  > .background {
    width: 100%;
    height: 100%;
  }
  > .background-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
  }
`;

export const StepShareBg = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.mobileBg});
  background-size: cover;
  background-position: center center;
  @media (min-width: ${(props) => props.theme.mediaQueryBreak}) {
    background-image: url(${(props) => props.desktopBg});
  }
`;

export const StepContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  width: 100%;
  height: 100vh;
`;

export const HeaderBlock = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (min-width: ${(props) => props.theme.mediaQueryBreak}) {
    position: absolute;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
`;

// export const HeaderBlockContent = styled.div`
//     display: flex;
//     position: relative;
//     width: 100%;
//     height: 220px;
//     justify-content: center;
//     align-items: flex-start;
//     @media (max-width: ${(props) => props.theme.mediaQueryBreak}) {
//         display: flex;
//         height: 220px;
//         flex-direction: column;
//         align-items: center;
//         justify-content: space-between;
//     }
// `;

export const LogoGenoshaContainer = styled.div`
  display: flex;

  width: '100%';
  justify-content: 'center';
  // > div {
  //     > svg {
  //         width: 463px;
  //         height: 106px;
  //     }
  // }
`;

export const PositionContainer = styled.div`
  display: ${(props) => props.displayProp || 'flex'};
  height: ${(props) => props.heightProp || 'unset'};
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  position: ${(props) => props.positionProp || 'absolute'};
  top: ${(props) => props.topProp || 'unset'};
  left: ${(props) => props.leftProp || 'unset'};
  right: ${(props) => props.rightProp || 'unset'};
  bottom: ${(props) => props.bottomProp || 'unset'};
  @media (min-width: ${(props) => props.theme.mediaQueryBreakLaptop}) {
    ${(props) =>
      props.nissanIcon &&
      `
                top: 60px;
                left: 60px;
            `}
    ${(props) =>
      props.engineerIcon &&
      `
                top: 60px;
                right: 60px;
            `}
        ${(props) =>
      props.intelligentIcon &&
      `
                z-index: 0;
                right: 60px;
            `}
  }
  @media (max-width: ${(props) => props.theme.mediaQueryBreakLaptop}) {
    ${(props) =>
      props.engineerIcon &&
      `
                > div {
                    > svg {
                            display: none;
                    }
                }
            `}
    ${(props) =>
      props.nissanIcon &&
      `
                > div {
                    > svg {
                                width: 131px;
                                height: 108px;
                        }
                    }
            `}
  }
  @media (max-width: ${(props) => props.theme.mediaQueryBreak}) {
    display: ${(props) => props.displayPropMobile || 'flex'};
    top: ${(props) => props.topPropMobile || 'unset'};
    left: ${(props) => props.leftPropMobile || 'unset'};
    right: ${(props) => props.rightPropMobile || 'unset'};
    bottom: ${(props) => props.bottomPropMobile || 'unset'};
    position: ${(props) => props.positionPropMobile || 'absolute'};
    ${(props) =>
      props.nissanIcon &&
      `
                > div {
                    > svg {
                            width: 120px;
                            height: 100px;
                            @media (max-height: 900px) and (max-width: ${props.theme.mediaQueryBreak}) {
                                width: 75px;
                                height: 67px;
                        }
                    }
                }
            `}
    ${(props) =>
      props.intelligentIcon &&
      `
            z-index: 0;
            > img {
                width: 94px;
                height: 34px;
                @media (max-width: ${props.theme.mediaQueryBreak2}) {
                    width: 63px;
                    height: 22px;
                }
            }
            @media (max-width: ${props.theme.mediaQueryBreak2}) {
                bottom: 15px;
                > imb {
                    width: 63px;
                    height: 22px;
                }
            }
        `}
        ${(props) =>
      props.engineerIconMobileWidth &&
      `
                > img {
                    width: ${props.engineerIconMobileWidth};
                }
        `}
  }
  @media (max-width: ${(props) => props.theme.mediaQueryBreak2}) {
    ${(props) =>
      props.engineerIconSmallMobileWidth &&
      `
                > img {
                    width: ${props.engineerIconSmallMobileWidth};
                }
        `}
  }
  @media (min-width: ${(props) => props.theme.mediaQueryBreak}) {
    ${(props) =>
      props.engineerIconMobile &&
      `
                > img {
                    display: none;
                }
        `}
  }
`;

export const Text = styled.p`
  margin: ${(props) => props.margin || 0};
  color: ${(props) => props.color};
  padding: ${(props) => props.padding || 0};
  font-weight: ${(props) => props.fontWeight || 'unset'};
  letter-spacing: ${(props) => props.letterSpacing || 'unset'};
  font-size: ${(props) => props.fontSize || 'unset'};
  line-height: ${(props) => props.lineHeight || 'unset'};
  text-transform: ${(props) => props.textTransform || 'unset'};
  max-width: ${(props) => props.maxWidth || 'unset'};
  width: ${(props) => props.width || 'unset'};
  overflow: ${(props) => props.overflow || 'unset'};
  white-space: ${(props) => props.whiteSpace || 'unset'};
  text-overflow: ${(props) => props.textOverflow || 'unset'};
  text-decoration: ${(props) => props.textDecoration || 'unset'};
  text-align: ${(props) => props.textAlign || 'unset'};
  position: ${(props) => props.position || 'unset'};
  cursor: ${(props) => props.cursor || 'unset'};
  z-index: 2;
  font-family: ${(props) => props.fontFamily};
  word-break: break-word;
  span {
    font-weight: 900;
  }
`;

export const ModalContainer = styled.div`
  z-index: 6;
  height: 70vh;
  width: 75vw;
  max-width: 750px;
  @media (max-width: ${(props) => props.theme.mediaQueryBreakLaptop}) {
    width: 90vw;
  }
  @media (max-width: ${(props) => props.theme.mediaQueryBreak}) {
    height: 90vh;
    width: 90vw;
    position: absolute;
    top: 20px;
  }
  @media (min-width: ${(props) => props.theme.mediaQueryBreak}) {
    height: 90vh;
    width: 90vw;
    position: absolute;
    top: 50px;
  }
`;
