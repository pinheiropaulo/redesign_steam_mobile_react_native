import { Input } from "./styles";

export function TextInput(props) {
  return (
    <Input
      placeholder={props.placeholder}
      placeholderTextColor={props.placeholderTextColor || "#ECEFF44D"}
      autoCapitalize={props.autoCapitalize || "none"}
      autocorrect={props.autocorrect || false}
      secureTextEntry={props.secureTextEntry}
    />
  );
}
