import { Button, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

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

      <Button
        title={t('settings.theme')}
        onPress={() => navigation.navigate('Theme')}
      />

    </View>
  );
};

export default SettingsScreen;