import React from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { useColorScheme, View, Text } from "react-native";
import { styles } from "./style";
import { SectionProps } from "../../types";

export const TextSection = ({
  children,
  title,
  viewStyle,
  textStyle,
}: SectionProps) => {
  const isDarkMode = useColorScheme() === "dark";
  return (
    <View style={[styles.sectionContainer, viewStyle]}>
      <Text
        style={[
          styles.sectionTitle,
          textStyle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}
      >
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}
      >
        {children}
      </Text>
    </View>
  );
};
