declare module "react-native-progress/Bar" {
  import * as React from "react";
  import { ViewStyle } from "react-native";

  interface ProgressBarProps {
    progress: number;
    width?: number | null;
    color?: string;
    unfilledColor?: string;
    borderWidth?: number;
    borderColor?: string;
    borderRadius?: number;
    height?: number;
    indeterminate?: boolean;
    indeterminateAnimationDuration?: number;
    animationType?: "spring" | "timing";
    style?: ViewStyle;
  }

  export default class ProgressBar extends React.Component<ProgressBarProps> {}
}
