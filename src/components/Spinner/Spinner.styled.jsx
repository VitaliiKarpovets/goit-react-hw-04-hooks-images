import styled from "styled-components";

export const SpinnerContainer = styled.div`
    position: relative;
`

export const SpinnerStyled = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    overflow: hidden;

    width: 150px;
    height: 150px;
    border: 15px solid transparent;
    border-top: 15px solid rgb(0, 0, 0, 0.3);
    border-left: 15px solid rgb(0, 0, 0, 0.3);
    border-bottom: 15px solid rgb(0, 0, 0, 0.3);
    border-right: 15px solid $accentColor;
    border-radius: 50%;

    animation-name: spin;
    animation-duration: 0.75s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;

    @keyframes spin {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }

  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
`