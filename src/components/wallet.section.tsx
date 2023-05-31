import { FC, ReactElement } from "react";
import { Text, View, Platform } from "react-native";
import { MaterialIcons, Feather } from "@expo/vector-icons";

import { useColors, Colors } from "../hooks/useColors";
import { formatDate } from "../utils/date";

export interface Wallet {
  balance: string;
  auto_fill_amount: string;
  auto_fill_date: string;
}
export interface WalletSectionProps {
  wallet: Wallet;
}
export const WalletSection: FC<WalletSectionProps> = ({
  wallet,
}: WalletSectionProps): ReactElement => {
  const colors: Colors = useColors();

  return (
    <View
      style={{
        height: 140,
        backgroundColor: colors.white,
        marginHorizontal: 8,
        marginTop: 12,
        borderRadius: 12,
        shadowColor: "#171717",
        shadowOffset: { width: -1, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 1,
        overflow: "hidden",
        paddingHorizontal: "5%",
      }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottomColor: colors.bluegray,
          borderBottomWidth: 1,
          borderStyle: Platform.OS == "ios" ? "solid" : "dashed",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View
            style={{
              height: 48,
              width: 48,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 24,
              backgroundColor: colors.lightgray,
              marginRight: 12,
            }}
          >
            <MaterialIcons
              name="account-balance-wallet"
              size={28}
              color={colors.blue}
            />
          </View>
          <View>
            <Text style={{ fontSize: 24, color: colors.blue }}>
              ${parseFloat(wallet.balance).toLocaleString("en")}
            </Text>
            <Text style={{ fontSize: 10, color: colors.bluegray }}>
              Wallet Balance
            </Text>
          </View>
        </View>
        <View
          style={{
            height: 64,
            alignItems: "flex-end",
            justifyContent: "center",
          }}
        >
          <Feather
            name={"arrow-right-circle"}
            size={28}
            color={colors.bluegray}
          />
        </View>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
        }}
      >
        <View
          style={{
            maxWidth: "50%",
            flex: 1,
            height: "100%",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 20, color: colors.blue, marginBottom: 3 }}>
            {formatDate(wallet.auto_fill_date)}
          </Text>
          <Text style={{ fontSize: 10, color: colors.bluegray }}>
            Auto fill date
          </Text>
        </View>
        <View
          style={{
            width: 2,
            height: "55%",
            alignSelf: "center",
            backgroundColor: colors.bluegray,
          }}
        ></View>
        <View
          style={{
            maxWidth: "50%",
            flex: 1,
            height: "100%",
            justifyContent: "center",
            paddingLeft: 28,
          }}
        >
          <Text style={{ fontSize: 20, color: colors.blue, marginBottom: 3 }}>
            ${parseFloat(wallet.auto_fill_amount).toLocaleString("en")}
          </Text>
          <Text style={{ fontSize: 10, color: colors.bluegray }}>
            Auto fill amount
          </Text>
        </View>
      </View>
    </View>
  );
};
