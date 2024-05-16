import styled from "styled-components"

export const StyledOutput = styled.div`
  border: 2px solid #181818;
  border-radius: 0.5em;
  width: 100%;
  height: 100%;
  &:hover {
    background: linear-gradient(90deg, #03a9f442, #f441a578);
  }
  & span {
    display: block;
    width: 100%;
    min-height: 100px;
  }
`
