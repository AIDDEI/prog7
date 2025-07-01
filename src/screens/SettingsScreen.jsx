import { Button, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from '../css/styles.js';
import { useTranslation } from 'react-i18next';

const SettingsScreen = () => {
  const navigation = useNavigation();

  const { t } = useTranslation();

  return (
    <View>
      <Button
        title={t('settings.language')}
        onPress={() => navigation.navigate('Language')}
      />
    </View>
  );
};

export default SettingsScreen;