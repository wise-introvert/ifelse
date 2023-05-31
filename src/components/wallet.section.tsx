import { FC, ReactElement } from "react";
import { Text, View, Platform, StyleSheet } from "react-native";
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
  const styles = StyleSheet.create({
    container: {
      height: 140,
      backgroundColor: colors.white,
      marginTop: 12,
      borderRadius: 12,
      shadowColor: "#171717",
      shadowOffset: { width: -1, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 1,
      overflow: "hidden",
      paddingHorizontal: "5%",
    },
    rowContainer: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    walletIconContainer: {
      height: 48,
      width: 48,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 24,
      backgroundColor: colors.lightgray,
      marginRight: 12,
    },
    walletIcon: {
      fontSize: 28,
      color: colors.blue,
    },
    walletInfoContainer: {
      flexDirection: "row",
      alignItems: "center",
    },
    walletBalanceText: {
      fontSize: 24,
      color: colors.blue,
    },
    walletBalanceLabel: {
      fontSize: 10,
      color: colors.bluegray,
    },
    arrowIconContainer: {
      height: 64,
      alignItems: "flex-end",
      justifyContent: "center",
    },
    arrowIcon: {
      fontSize: 28,
      color: colors.bluegray,
    },
    dateContainer: {
      maxWidth: "50%",
      flex: 1,
      height: "100%",
      justifyContent: "center",
    },
    dateText: {
      fontSize: 20,
      color: colors.blue,
      marginBottom: 3,
    },
    dateLabel: {
      fontSize: 10,
      color: colors.bluegray,
    },
    divider: {
      width: 2,
      height: "55%",
      alignSelf: "center",
      backgroundColor: colors.bluegray,
    },
    amountContainer: {
      maxWidth: "50%",
      flex: 1,
      height: "100%",
      justifyContent: "center",
      paddingLeft: 28,
    },
    amountText: {
      fontSize: 20,
      color: colors.blue,
      marginBottom: 3,
    },
    amountLabel: {
      fontSize: 10,
      color: colors.bluegray,
    },
  });

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.rowContainer,
          {
            borderBottomColor: colors.bluegray,
            borderBottomWidth: 1,
            borderStyle: Platform.OS == "ios" ? "solid" : "dashed",
          },
        ]}
      >
        <View style={styles.walletInfoContainer}>
          <View style={styles.walletIconContainer}>
            <MaterialIcons
              name="account-balance-wallet"
              size={28}
              color={colors.blue}
            />
          </View>
          <View>
            <Text style={styles.walletBalanceText}>
              ${parseFloat(wallet.balance).toLocaleString("en")}
            </Text>
            <Text style={styles.walletBalanceLabel}>Wallet Balance</Text>
          </View>
        </View>
        <View style={styles.arrowIconContainer}>
          <Feather
            name="arrow-right-circle"
            size={28}
            color={colors.bluegray}
          />
        </View>
      </View>
      <View style={styles.rowContainer}>
        <View style={styles.dateContainer}>
          <Text style={styles.dateText}>
            {formatDate(wallet.auto_fill_date)}
          </Text>
          <Text style={styles.dateLabel}>Auto fill date</Text>
        </View>
        <View style={styles.divider}></View>
        <View style={styles.amountContainer}>
          <Text style={styles.amountText}>
            ${parseFloat(wallet.auto_fill_amount).toLocaleString("en")}
          </Text>
          <Text style={styles.amountLabel}>Auto fill amount</Text>
        </View>
      </View>
    </View>
  );
};
