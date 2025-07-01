import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { styles } from '../css/styles.js';
import { useTranslation } from 'react-i18next';

const LanguageScreen = () => {
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

  return (
    <View>

        <Text>{t('settings.set_language')}</Text>

        <FlatList
            data={LANGUAGES}
            keyExtractor={item => item.code}
            renderItem={({ item }) => (
                <TouchableOpacity
                    onPress={() => setLanguage(item.code)}
                >
                    <Text>{item.label}</Text>
                </TouchableOpacity>
            )}
        />

    </View>
  );
}

export default LanguageScreen;