import { StyledButton } from "./StyledButton"

export default function Button({ children, onClick, ...props }) {
  return (
    <StyledButton
      {...props}
      onClick={onClick}
      className="container"
    >
      <button className="button">Translate</button>
    </StyledButton>
  )
}
