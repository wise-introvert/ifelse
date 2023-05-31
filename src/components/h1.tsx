import { FC, ReactElement } from "react";
import { Text, TextProps, StyleSheet } from "react-native";

import { useColors } from "../hooks/useColors";

export const H1: FC<TextProps> = ({
  children,
  style,
  ...rest
}: TextProps): ReactElement => {
  const colors = useColors();
  const styles = StyleSheet.create({
    text: { fontSize: 17, color: colors.blue, ...(style as any) },
  });

  return (
    <Text style={styles.text} {...rest}>
      {children}
    </Text>
  );
};
