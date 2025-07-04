import { useContext } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { ThemeContext } from '../css/ThemeContext';
import { createStyles } from '../css/styles';
import { useTranslation } from 'react-i18next';

import PressableText from '../components/PressableText.jsx';

const LanguageScreen = () => {
  const { theme } = useContext(ThemeContext);
  const styles = createStyles(theme);

  const { i18n, t } = useTranslation();
  
  const LANGUAGES = [
    { code: "en", label: t('language.english') },
    { code: "nl", label: t('language.dutch') },
    { code: "de", label: t('language.german') },
    { code: "es", label: t('language.spanish') },
    { code: "zh", label: t('language.chinese') },
  ];

  const setLanguage = async (code) => {
    await i18n.changeLanguage(code);
    await AsyncStorage.setItem('appLanguage', code);
  };

  const renderLanguage = ({ item }) => (
    <PressableText
      text={item.label}
      onPress={() => setLanguage(item.code)}
      style={styles.listItem}
      textStyle={styles.ListItemText}
    />
  );

  return (
    <View style={styles.container}>

        <Text style={styles.title}>{t('settings.set_language')}</Text>

        <FlatList
            data={LANGUAGES}
            renderItem={renderLanguage}
            keyExtractor={item => item.code}
        />

    </View>
  );
}

export default LanguageScreen;