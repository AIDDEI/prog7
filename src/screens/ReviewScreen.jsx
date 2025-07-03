import { useEffect, useContext } from 'react';
import { View, Text, TextInput, Alert, ScrollView, TouchableOpacity, Dimensions } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";

import useLocationData from "../functions/useLocationData";

import UploadedImageDisplay from "../components/UploadedImageDisplay";
import AppButton from '../components/AppButton';

import { ThemeContext } from '../css/ThemeContext';
import { createStyles } from '../css/styles';
import { useTranslation } from 'react-i18next';

const ReviewScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { location } = route.params || {};

    const { theme } = useContext(ThemeContext);
    const styles = createStyles(theme);

    const { t } = useTranslation();

    const sectionWidth = Dimensions.get('window').width - 32;
    const sectionHeight = sectionWidth * 2 / 3;
    
    const { review, setReview, like, setLike, photoUri, setPhotoUri, saveFeedback } = useLocationData(location?.id);

    const handleLike = () => {
        setLike(!like);
    };

    const handleReviewChange = (text) => {
        setReview(text);
    };

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            allowsEditing: true,
            aspect: [3, 2],
            quality: 0.5,
        });
        if (!result.canceled && result.assets && result.assets.length > 0) {
            setPhotoUri(result.assets[0].uri);
        }
    };

    const handleSave = () => {
        saveFeedback(review, like, photoUri);
        Alert.alert(t('generic.success'), t('review.saved'));
        navigation.navigate('LocationScreen', { location: location, fromReview: true });
    };

    useEffect(() => {
            if (location?.name) {
                navigation.setOptions({ title: t('header.review_location') + location.name });
            }
        }, [navigation, location?.name]);

    return (
        <ScrollView style={styles.container}>

            <View style={styles.titleRow}>
                <View style={{ flex: 1 }}>
                    <Text style={styles.title}>{location?.name}</Text>
                    {location?.type && (
                        <Text style={styles.subtitle}>{location.type}</Text>
                    )}
                </View>
                <TouchableOpacity onPress={handleLike}>
                    <Text style={styles.likeIcon}>{like ? t('generic.like') : t('generic.like_empty')}</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>{t('review.your_review')}</Text>
                <TextInput
                    style={[styles.sectionContent, { minHeight: 80, backgroundColor: '#fff', borderRadius: 8, padding: 10, marginTop: 6 }]}
                    placeholder={t('review.placeholder')}
                    value={review}
                    onChangeText={handleReviewChange}
                    multiline
                />
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>{t('review.photo')}</Text>
                <AppButton title={t('review.addPhoto')} onPress={pickImage}/>
            </View>

            <UploadedImageDisplay
                uri={photoUri}
                width={sectionWidth}
                height={sectionHeight}
            />

            <AppButton title={t('button.save')} onPress={handleSave}/>

        </ScrollView>
    );
};

export default ReviewScreen;