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
import * as Font from 'expo-font';
import SignedOutNav from './src/navigators/SignedOutNav';

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

  // preload on mount
  useEffect(() => {
    async function prepare() {
      try {
        // Fonts
        await Font.loadAsync({
          'sejong-bold': require('./src/assets/fonts/sejong-bold.ttf'),
          'sejong-regular': require('./src/assets/fonts/sejong-regular.ttf'),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  // for preload and splashscreen
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
              {isSignedIn ? <SignedInNav /> : <SignedOutNav />}
            </NavigationContainer>
          </SafeAreaProvider>
        </QueryClientProvider>
      )}
    </Observer>
  );
}

export default App;
