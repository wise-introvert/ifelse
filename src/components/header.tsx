import { ReactElement, FC } from "react";
import { Text, View, Image } from "react-native";
import { Feather } from "@expo/vector-icons";

import { useColors, Colors } from "../hooks/useColors";

export const Header: FC<{}> = (): ReactElement => {
  const colors: Colors = useColors();

  return (
    <View
      style={{
        width: "100%",
        minHeight: 64,
        maxHeight: 128,
        paddingVertical: 2,
        paddingHorizontal: "5%",
        flexDirection: "row",
        marginTop: 12,
      }}
    >
      <View
        style={{
          flex: 3,
          height: "100%",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontSize: 32,
            color: colors.blue,
          }}
        >
          Hi, Clarence
        </Text>
        <View
          style={{
            marginTop: 4,
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Feather name={"phone-call"} size={18} color={colors.bluegray} />
          <Text style={{ fontSize: 12, marginLeft: 8, color: colors.bluegray }}>
            +1 (647) 861-9429
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          height: "100%",
          alignItems: "flex-end",
          justifyContent: "center",
        }}
      >
        <Image
          source={{
            uri: "https://img.freepik.com/premium-vector/spaceman-avatar-vector-logo_739653-11.jpg",
          }}
          style={{
            borderRadius: 64 / 2,
            height: 64,
            width: 64,
            borderColor: colors.lightblue,
            borderWidth: 3,
          }}
        />
      </View>
    </View>
  );
};
