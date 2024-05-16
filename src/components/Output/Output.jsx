import { StyledOutput } from "./StyledOutput"

export default function Output({ children, text = "", ...props }) {
  return <StyledOutput {...props}>{text}</StyledOutput>
}
