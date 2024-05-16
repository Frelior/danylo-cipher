import { StyledSwitch } from "./StyledSwitch"

export default function Switch({ children, onClick = null, ...props }) {
  return (
    <StyledSwitch
      {...props}
      onClick={onClick}
      type="checkbox"
    ></StyledSwitch>
  )
}
