import {
  useFonts,
  NunitoSans_300Light,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
  NunitoSans_900Black,
} from '@expo-google-fonts/nunito-sans';
import SectionsProvider from './contexts/SectionsProvider';
import RootStackNavigation from './navigation/RootStackNavigation';
import { NavigationContainer } from '@react-navigation/native';
import "expo-dev-client"
import * as SplashScreen from "expo-splash-screen"
import { useCallback, useEffect } from 'react';
import SavesProvider from './contexts/SavesProvider';

SplashScreen.preventAutoHideAsync()

export default function App() {
  let [fontsLoaded] = useFonts({
    NunitoSans_300Light,
    NunitoSans_400Regular,
    NunitoSans_700Bold,
    NunitoSans_900Black,
  })

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync()
    }
    prepare()
  }, [])

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }

  return (
    <SavesProvider>
      <SectionsProvider>
        <NavigationContainer onReady={onLayoutRootView}>
          <RootStackNavigation/>
        </NavigationContainer>
      </SectionsProvider>
    </SavesProvider>
  )
}

