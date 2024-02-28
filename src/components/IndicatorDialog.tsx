import React from "react";
import {
  ActivityIndicator,
  ActivityIndicatorProps,
  Dimensions,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";

interface IIndicatorDialogProps {
  containerStyle?: StyleProp<ViewStyle>;
  activityIndicatorStyle?: ActivityIndicatorProps;
}

const { width, height } = Dimensions.get("screen");
export function IndicatorDialog(props: IIndicatorDialogProps) {
  return (
    <View style={[styles.container, props.containerStyle]}>
      <ActivityIndicator size="large" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    width,
    height,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
});
