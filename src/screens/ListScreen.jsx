import { StatusBar } from 'expo-status-bar';
import { Text, View, FlatList, Pressable } from 'react-native';
import { useNavigation } from "@react-navigation/native";

import { styles } from '../css/styles.js';
import { useTranslation } from 'react-i18next';
import { useDataFetching } from '../initialization/DataFetching.js';

const ListScreen = () => {
  const { t } = useTranslation();
  const locations = useDataFetching();
  const navigation = useNavigation();

  const sortedLocations = [...locations].sort((a, b) =>
    a.name.localeCompare(b.name, undefined, { sensitivity: 'base' })
  );

  const renderLocation = ({item}) => (
      <View>
          <Pressable onPress={() => navigation.navigate('LocationScreen', { location: item })}>
              <Text>{item.name}</Text>
          </Pressable>
      </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
      data = {sortedLocations}
      renderItem = {renderLocation}
      keyExtractor = {item => item.id}
      />
      <StatusBar style="auto"/>
    </View>
  );
}

export default ListScreen;
