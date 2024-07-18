import MainStack from '@/navigation/stacks/MainStack';
import client from '@/services';
import navigatorUtil from '@/utils/navigator-util';
import { ApolloProvider } from '@apollo/client';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <SafeAreaProvider>
        <NavigationContainer ref={navigatorUtil.navigationRef}>
          <MainStack />
          <StatusBar style='dark' />
        </NavigationContainer>
      </SafeAreaProvider>
    </ApolloProvider>
  );
}

export default App;
