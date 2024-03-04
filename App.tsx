import React, { useEffect } from "react";
import { Platform } from "react-native";

import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import MainLayout from "./src/MainLayout";
import { DownloadMediaModule, TestNativeModule } from "./src/native_module";
import {  store, persistor } from "./src/redux/store";

function App(): React.JSX.Element {
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
