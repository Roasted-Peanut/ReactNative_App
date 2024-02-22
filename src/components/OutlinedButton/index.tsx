import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { OutlinedButtonProps } from "../../types";
import { styles } from "./style";

const OutlinedButton: React.FC<OutlinedButtonProps> = ({
  title,
  onPress,
  style,
  children,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={onPress}
      style={[style, styles.viewFullMediaBtn]}
    >
      <Text style={styles.viewFullMediaTxt}>{title}</Text>
      {children}
    </TouchableOpacity>
  );
};

export default OutlinedButton;
