import { FC, ReactElement } from "react";
import { View, FlatList, ListRenderItemInfo, StyleSheet } from "react-native";

import { IDataListItem, DataListItem } from ".";

interface DataListSectionProps {
  items: IDataListItem[];
}
export const DataListSection: FC<DataListSectionProps> = (
  props: DataListSectionProps
): ReactElement => {
  const styles = StyleSheet.create({
    container: {
      marginTop: 12,
    },
  });
  return (
    <View style={styles.container}>
      <FlatList<IDataListItem>
        showsHorizontalScrollIndicator={false}
        horizontal
        data={props.items}
        renderItem={(info: ListRenderItemInfo<IDataListItem>): ReactElement => (
          <DataListItem item={info.item} />
        )}
      />
    </View>
  );
};
