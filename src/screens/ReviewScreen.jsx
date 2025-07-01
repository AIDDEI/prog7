import { useEffect } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, Alert } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";

import useLocationData from "../functions/useLocationData";

import UploadedImageDisplay from "../components/UploadedImageDisplay";

import { useTranslation } from 'react-i18next';

const ReviewScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { location } = route.params || {};

    const { t } = useTranslation();
    
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
        <View>

            <Text>{location?.name}</Text>

            <TouchableOpacity onPress={handleLike}>

                <Text>{like ? t('generic.like') : t('generic.like_empty')}</Text>

            </TouchableOpacity>

            <TextInput
                placeholder={t('review.placeholder')}
                value={review}
                onChangeText={handleReviewChange}
                multiline
            />

            <Button title={t('review.photo')} onPress={pickImage}/>

            <UploadedImageDisplay
                uri={photoUri}
                style={{ width: 200, height: 200, marginVertical: 10 }}
            />

            <Button title={t('button.save')} onPress={handleSave}/>

        </View>
    );
};

export default ReviewScreen;