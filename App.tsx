import {NavigationContainer} from '@react-navigation/native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {navigationRef} from './src/RootNavigation';
import SignedInNav from './src/navigators/SignedInNav';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import * as SplashScreen from 'expo-splash-screen';
import {Observer} from 'mobx-react-lite';

SplashScreen.preventAutoHideAsync();

function App() {
  const queryClient = new QueryClient();

  // preload assets
  const [appIsReady, setAppIsReady] = useState<boolean>(false);
  const routeNameRef = useRef();

  /** for open notification */
  const [initialNotification, setInitialNotification] = useState();

  const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  useEffect(() => {
    async function prepare() {
      try {
      } catch (e) {
        console.warn(e);
      } finally {
        // tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  const isSignedIn = true;

  return (
    <Observer>
      {() => (
        <QueryClientProvider client={queryClient}>
          <StatusBar barStyle="light-content" />
          <SafeAreaProvider>
            <NavigationContainer ref={navigationRef} onReady={onLayoutRootView}>
              {isSignedIn ? <SignedInNav /> : null}
            </NavigationContainer>
          </SafeAreaProvider>
        </QueryClientProvider>
      )}
    </Observer>
  );
}

export default App;
