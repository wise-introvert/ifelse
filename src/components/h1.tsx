import { FC, ReactElement } from "react";
import { Text, TextProps } from "react-native";

import { useColors } from "../hooks/useColors";

export const H1: FC<TextProps> = ({
  children,
  style,
  ...rest
}: TextProps): ReactElement => {
  const colors = useColors();

  return (
    <Text
      style={{ fontSize: 17, color: colors.blue, ...(style as any) }}
      {...rest}
    >
      {children}
    </Text>
  );
};
