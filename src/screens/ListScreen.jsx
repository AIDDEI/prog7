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

  const renderLocation = ({item}) => (
      <View>
          <Pressable onPress={() => navigation.navigate('LocationScreen', { name: item.name, description: item.description })}>
              <Text>{item.name}</Text>
          </Pressable>
      </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
      data = {locations}
      renderItem = {renderLocation}
      keyExtractor = {item => item.id}
      />
      <StatusBar style="auto"/>
    </View>
  );
}

export default ListScreen;
