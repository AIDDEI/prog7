import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { styles } from '../css/styles.js';
import { useTranslation } from 'react-i18next';

const MapScreen = () => {
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{t('welcome')}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

export default MapScreen;
