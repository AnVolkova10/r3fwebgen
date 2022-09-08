import styled from 'styled-components';

export const BtnsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 54px;
    @media (max-width: ${(props) => props.theme.mediaQueryBreak}) {
        max-width: 400px;
    }
`;

export const ButtonContainer = styled.div`
    margin-right: 32px;
    @media (max-width: ${(props) => props.theme.mediaQueryBreak2}) {
        margin-right: 15px;
    }
`;

export const Container = styled.div`
    height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    @media (min-width: ${(props) =>
            props.theme.mediaQueryBreak}) and (max-width: ${(props) =>
            props.theme.mediaQueryBreakLaptop}) {
        padding-bottom: 40px;
    }
    @media (max-height: 630px) {
        height: 200px;
    }
    @media (min-width: ${(props) => props.theme.mediaQueryBreakLaptop}) {
        height: 500px;
    }
`;

export const FontierIconContainer = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    top: -33px;
    > div {
        > svg {
            width: 463px;
            height: 106px;
        }
    }
    @media (max-width: ${(props) => props.theme.mediaQueryBreak}) {
        > div {
            > svg {
                width: 244px;
                height: 56px;
            }
        }
    }
`;

export const Text = styled.p`
    margin: ${(props) => props.margin || 0};
    color: ${(props) => props.color};
    padding: ${(props) => props.padding || 0};
    font-weight: ${(props) => props.fontWeight || 'unset'};
    letter-spacing: ${(props) => props.letterSpacing || 'unset'};
    font-size: ${(props) => props.fontSize || 'inherit'};
    line-height: ${(props) => props.lineHeight || 'unset'};
    text-transform: ${(props) => props.textTransform || 'unset'};
    max-width: ${(props) => props.maxWidth || 'unset'};
    width: ${(props) => props.width || 'unset'};
    overflow: ${(props) => props.overflow || 'unset'};
    white-space: ${(props) => props.whiteSpace || 'unset'};
    text-overflow: ${(props) => props.textOverflow || 'unset'};
    text-decoration: ${(props) => props.textDecoration || 'unset'};
    text-align: ${(props) => props.textAlign || 'unset'};
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
