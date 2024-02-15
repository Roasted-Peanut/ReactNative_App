/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
  useColorScheme
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { TextSection } from './src/components';
import { DownloadMediaModule, TestNativeModule } from './src/native_module';
import { Title } from './src/utils';

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
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <TextSection title={Title}>
            <ReloadInstructions />
          </TextSection>
          <TextSection title="Debug">
            <DebugInstructions />
          </TextSection>
          <TextSection title="Learn More">
            {}
            Read the docs to discover what to do next:
          </TextSection>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
