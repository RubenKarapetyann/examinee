import RootStackNavigation from './navigation/RootStackNavigation';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <RootStackNavigation/>
    </NavigationContainer>
  )
}

