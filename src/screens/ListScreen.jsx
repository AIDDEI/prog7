import { useContext } from 'react';
import { View, FlatList } from 'react-native';
import { useNavigation } from "@react-navigation/native";

import { useDataFetching } from '../initialization/DataFetching.js';
import PressableText from '../components/PressableText.jsx';

import { ThemeContext } from '../css/ThemeContext.jsx';
import { createStyles } from '../css/styles.js';

const ListScreen = () => {
  const locations = useDataFetching();
  const navigation = useNavigation();

  const { theme } = useContext(ThemeContext);
  const styles = createStyles(theme);

  const sortedLocations = [...locations].sort((a, b) =>
    a.name.localeCompare(b.name, undefined, { sensitivity: 'base' })
  );

  const renderLocation = ({item}) => (
    <PressableText
      text={item.name}
      onPress={() => navigation.navigate('LocationScreen', { location: item })}
      style={styles.listItem}
      textStyle={styles.ListItemText}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
      data={sortedLocations}
      renderItem={renderLocation}
      keyExtractor={item => item.id}
      />
    </View>
  );
}

export default ListScreen;