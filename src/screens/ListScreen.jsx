import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { styles } from '../css/styles.js';
import { useTranslation } from 'react-i18next';

const ListScreen = () => {
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{t('test')}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

export default ListScreen;
