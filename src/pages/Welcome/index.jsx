import { FontAwesome5 } from '@expo/vector-icons';
import SteamGuard from '../../assets/svg/preview_steam_guard.svg';
import { DefaultButton } from '../../components/DefaultButton';
import {
  Container,
  GuardBanner,
  GuardText,
  Header,
  Text,
  TextInfo,
  TextLink,
  Title,
} from './styles';

export function Welcome() {
  return (
    <Container>
      <Header>
        <Title>
          Bem vindo(a) ao {'\n'}
          Steam Mobile
        </Title>
        <Text>
          Escolha abaixo por onde {'\n'}
          você gostaria de iniciar
        </Text>
      </Header>

      <GuardBanner>
        <FontAwesome5 name="chevron-left" size={20} color="black" />
        <SteamGuard />
        <FontAwesome5 name="chevron-right" size={20} color="black" />
      </GuardBanner>

      <GuardText>Steam Guard</GuardText>

      <TextInfo>
        Essa configuração será mantida, mas {'\n'}
        poderá ser modificada a qualquer {'\n'}
        momento pelas Configurações do App.
      </TextInfo>

      <DefaultButton text="Vamos lá" />

      <TextLink>Pular</TextLink>
    </Container>
  );
}
