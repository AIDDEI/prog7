import { View, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from "@react-navigation/native";

import { useDataFetching } from '../initialization/DataFetching.js';
import PressableText from '../components/PressableText.jsx';

import { styles } from '../css/styles.js';

const ListScreen = () => {
  const locations = useDataFetching();
  const navigation = useNavigation();

  const sortedLocations = [...locations].sort((a, b) =>
    a.name.localeCompare(b.name, undefined, { sensitivity: 'base' })
  );

  const renderLocation = ({item}) => (
    <PressableText
      text={item.name}
      onPress={() => navigation.navigate('LocationScreen', { location: item })}
    />
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