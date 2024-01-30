import { PropsWithChildren } from "react";
import { TextStyle, ViewStyle } from "react-native";

export type SectionProps = PropsWithChildren<{
  title: string;
  viewStyle?: ViewStyle;
  textStyle?: TextStyle;
}>;

export type OutlinedButtonProps = PropsWithChildren<{
  title: string;
  onPress?(): void;
  style?: ViewStyle
}>;
export type DownLoadMeidaProps = {
  dataBase64: any;
  mime?: any;
  callBackSuccess?: (res: any) => void;
};