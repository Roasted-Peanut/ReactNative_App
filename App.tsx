import React, { useEffect } from 'react';
import {
  Platform,
  StatusBar,
  useColorScheme
} from 'react-native';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  Colors
} from 'react-native/Libraries/NewAppScreen';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import MainLayout from './src/MainLayout';
import { DownloadMediaModule, TestNativeModule } from './src/native_module';
import { persistor, store } from './src/store/store';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {
    if (Platform.OS == "android") {
      const downloadMedia = DownloadMediaModule;
      console.log("DownloadMediaModule", downloadMedia);
    } else {
      const TestIOSNativeModule = TestNativeModule;
      console.log("TestNativeModule", TestIOSNativeModule);
    }
  });

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <MainLayout />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
