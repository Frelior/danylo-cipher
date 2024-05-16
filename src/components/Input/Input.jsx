import { StyledInput } from "./StyledInput"

export default function Input({ children, onChange, ...props }) {
  return (
    <StyledInput
      {...props}
      onChange={onChange}
    >
      <textarea
        name=""
        id=""
      ></textarea>
    </StyledInput>
  )
}
