import { StyleSheet, Text, View } from 'react-native';
import HomePage from './screens/HomePage';
import ChooseColor from './components/ChooseColor';
import { LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Navigaator from './navigator/Navigaator';
import { Provider } from 'react-redux';
import { setupStore } from './store';

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

export default function App() {
  const store = setupStore()

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigaator />
      </NavigationContainer>
    </Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bcd2f0',
  },
});
