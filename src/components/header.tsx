import { ReactElement, FC } from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

import { useColors, Colors } from "../hooks/useColors";

export const Header: FC<{}> = (): ReactElement => {
  const colors: Colors = useColors();
  const styles = StyleSheet.create({
    container: {
      width: "100%",
      minHeight: 64,
      maxHeight: 128,
      paddingVertical: 2,
      paddingHorizontal: "5%",
      flexDirection: "row",
      marginTop: 12,
    },
    leftContainer: {
      flex: 3,
      height: "100%",
      justifyContent: "center",
    },
    greetingText: {
      fontSize: 32,
    },
    infoContainer: {
      marginTop: 4,
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
    },
    infoIcon: {
      marginRight: 8,
    },
    infoText: {
      fontSize: 12,
    },
    rightContainer: {
      flex: 1,
      height: "100%",
      alignItems: "flex-end",
      justifyContent: "center",
    },
    profileImage: {
      borderRadius: 64 / 2,
      height: 64,
      width: 64,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={[styles.greetingText, { color: colors.blue }]}>
          Hi, Clarence
        </Text>
        <View style={styles.infoContainer}>
          <Feather
            name={"phone-call"}
            size={18}
            color={colors.bluegray}
            style={styles.infoIcon}
          />
          <Text style={[styles.infoText, { color: colors.bluegray }]}>
            +1 (647) 861-9429
          </Text>
        </View>
      </View>
      <View style={styles.rightContainer}>
        <Image
          source={{
            uri: "https://img.freepik.com/premium-vector/spaceman-avatar-vector-logo_739653-11.jpg",
          }}
          style={[
            styles.profileImage,
            { borderColor: colors.lightblue, borderWidth: 3 },
          ]}
        />
      </View>
    </View>
  );
};
