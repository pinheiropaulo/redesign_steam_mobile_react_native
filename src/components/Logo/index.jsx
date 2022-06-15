import { StyleSheet } from "react-native";
import Logo from "../../assets/svg/steam_logo.svg";

export function SteamLogo() {
  return <Logo style={styles.logo} />;
}

const styles = StyleSheet.create({
  logo: {
    marginBottom: 45,
    marginTop: 155,
  },
});
