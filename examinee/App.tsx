import SectionsProvider from './contexts/SectionsProvider';
import RootStackNavigation from './navigation/RootStackNavigation';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <SectionsProvider>
      <NavigationContainer>
        <RootStackNavigation/>
      </NavigationContainer>
    </SectionsProvider>
    
  )
}

