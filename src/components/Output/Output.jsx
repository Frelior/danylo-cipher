import { StyledOutput } from "./StyledOutput"
import { CopyToClipboard } from "react-copy-to-clipboard"

export default function Output({ children, text = "", ...props }) {
  return (
    <StyledOutput {...props}>
      <CopyToClipboard text={text}>
        <span>{text}</span>
      </CopyToClipboard>
    </StyledOutput>
  )
}
