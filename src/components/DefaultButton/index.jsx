import { Button, ButtonText } from './styles';

export function DefaultButton({ text }) {
  return (
    <Button>
      <ButtonText>{text}</ButtonText>
    </Button>
  );
}
