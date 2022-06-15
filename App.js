import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { Home } from './src';

export default function App() {
  const [loaded] = useFonts({
    Roboto_Bold: require('./src/assets/fonts/Roboto_Bold.ttf'),
    Roboto_Medium: require('./src/assets/fonts/Roboto_Medium.ttf'),
    Roboto_Regular: require('./src/assets/fonts/Roboto_Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <>
      <StatusBar style="light" translucent={false} />
      <Home />
    </>
  );
}
