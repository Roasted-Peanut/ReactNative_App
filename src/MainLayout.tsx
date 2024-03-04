import React, { useCallback, useEffect, useRef } from "react";
import { AppState, Linking, StatusBar, StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import { IndicatorDialog, Toast } from "./components";
import AppNavigation from "./navigation/AppNavigator";
import RouteKey from "./navigation/RouteKey";
import { getAppStackState, getLoadingIndicator } from "./redux/selectors";
import { useGetPokemonByNameQuery } from "./redux/slices";

function MainLayout() {
  const appState = useSelector(getAppStackState);
  const appStateRef = useRef(AppState.currentState);
  const showGlobalIndicator = useSelector(getLoadingIndicator);

  const { data, error, isLoading } = useGetPokemonByNameQuery("bulbasaur");

  const handleAppState = useCallback(() => {
    AppState.addEventListener("change", (nextAppState) => {
      if (
        appStateRef.current.match(/inactive|background/) &&
        nextAppState === "active"
      ) {
        // Update action when appState changes
      }
      appStateRef.current = nextAppState;
    });
  }, []);

  const handleDeepLink = useCallback(() => {
    Linking.getInitialURL().then((res) => {
      // This function only work when disable debug mode.
      if (res) {
        // Do something if app is opened from an url
      }
    });
    Linking.addEventListener("url", (res) => {
      if (res?.url) {
        // Do something if app is opened from an url
      }
    });
  }, []);

  useEffect(() => {
    if (appState === RouteKey.MainStack) {
      handleAppState();
      handleDeepLink();
    }
  }, [appState, handleAppState, handleDeepLink]);

  return (
    <GestureHandlerRootView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <AppNavigation />
      {showGlobalIndicator && <IndicatorDialog />}
      <Toast />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MainLayout;
