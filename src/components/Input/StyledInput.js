import styled from "styled-components"

export const StyledInput = styled.div`
  & {
    position: relative;
    padding: 3px;
    background: linear-gradient(90deg, #03a9f4, #f441a5);
    border-radius: 0.9em;
    transition: all 0.4s ease;
    width: 100%;
    min-width: 150px;
  }

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    margin: auto;
    border-radius: 0.9em;
    z-index: -10;
    filter: blur(0);
    transition: filter 0.4s ease;
  }

  &:hover::before,
  &:focus-within::before {
    background: linear-gradient(90deg, #03a9f4, #f441a5);
    filter: blur(1.2em);
  }
  &:active::before {
    filter: blur(0.2em);
  }

  & textarea {
    font-size: 1.4em;
    padding: 0.6em 0.8em;
    border-radius: 0.5em;
    border: none;
    background-color: #000;
    color: rgba(255, 255, 255, 0.87);
    box-shadow: 2px 2px 3px #000000b4;
    height: 20vh;
    min-height: 200px;
    width: 100%;
    resize: none;

    font-family: "Sedan SC", serif;
    font-weight: 400;
    font-style: normal;
  }
`
