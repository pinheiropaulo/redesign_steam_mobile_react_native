import { DefaultButton } from '../../components/DefaultButton';
import { SteamLogo } from '../../components/Logo';
import { TextInput } from '../../components/TextInput';
import {
  Container,
  LoginText,
  LoginTextContainer,
  LoginTextLink,
  PasswordReset,
  PasswordText,
} from './styles';

export function Login() {
  return (
    <Container>
      <SteamLogo />

      <TextInput placeholder="Nome de usuário" />

      <TextInput placeholder="Senha" secureTextEntry />

      <PasswordReset>
        <PasswordText>Esqueceu sua senha?</PasswordText>
      </PasswordReset>

      <DefaultButton text="Iniciar sessão" />

      <LoginTextContainer>
        <LoginText>Não tem uma conta?</LoginText>
        <LoginTextLink>Cadastre-se</LoginTextLink>
      </LoginTextContainer>
    </Container>
  );
}
