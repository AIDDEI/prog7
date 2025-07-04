import { useContext } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { ThemeContext } from '../css/ThemeContext';
import { createStyles } from '../css/styles';
import { useTranslation } from 'react-i18next';

import AppButton from '../components/AppButton';

const SettingsScreen = () => {
  const navigation = useNavigation();

  const { theme } = useContext(ThemeContext);
  const styles = createStyles(theme);

  const { t } = useTranslation();

  return (
    <View style={styles.container}>

      <AppButton
        title={t('settings.language')}
        onPress={() => navigation.navigate('Language')}
        style={{ marginTop: 18 }}
      />

      <AppButton
        title={t('settings.theme')}
        onPress={() => navigation.navigate('Theme')}
      />

    </View>
  );
};

export default SettingsScreen;