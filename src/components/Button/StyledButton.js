import styled from "styled-components"

export const StyledButton = styled.div`
  button {
    font-size: 1.4em;
    padding: 0.6em 0.8em;
    border-radius: 0.5em;
    border: none;
    background-color: #000;
    color: #fff;
    cursor: pointer;
    box-shadow: 2px 2px 3px #000000b4;
    width: 100%;
  }

  & {
    position: relative;
    padding: 3px;
    background: linear-gradient(90deg, #03a9f4, #f441a5);
    border-radius: 0.9em;
    transition: all 0.4s ease;
    width: 40%;
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

  &:hover::before {
    background: linear-gradient(90deg, #03a9f4, #f441a5);
    filter: blur(1.2em);
  }
  &:active::before {
    filter: blur(0.2em);
  }
`