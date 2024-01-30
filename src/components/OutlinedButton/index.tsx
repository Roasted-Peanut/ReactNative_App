import React from 'react';
import { Text, TouchableOpacity, ViewStyle } from 'react-native';
import { styles } from './style';
import { OutlinedButtonProps } from '../../types';


const OutlinedButton: React.FC<OutlinedButtonProps> = ({
  title,
  onPress,
  style,
  children
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={onPress}
      style={[style, styles.viewFullMediaBtn]}>
      <Text style={styles.viewFullMediaTxt}>{title}</Text>
      {children}
    </TouchableOpacity>
  );
};

export default OutlinedButton;
