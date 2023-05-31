import { FC, ReactElement } from "react";
import { View, FlatList, ListRenderItemInfo } from "react-native";

import { IDataListItem, DataListItem } from ".";

interface DataListSectionProps {
  items: IDataListItem[];
}
export const DataListSection: FC<DataListSectionProps> = (
  props: DataListSectionProps
): ReactElement => {
  return (
    <View style={{ marginTop: 8 }}>
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
