import SectionsProvider from './contexts/SectionsProvider';
import RootStackNavigation from './navigation/RootStackNavigation';
import { NavigationContainer } from '@react-navigation/native';
import "expo-dev-client"

export default function App() {
  return (
    <SectionsProvider>
      <NavigationContainer>
        <RootStackNavigation/>
      </NavigationContainer>
    </SectionsProvider>
    
  )
}

