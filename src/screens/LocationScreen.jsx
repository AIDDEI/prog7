import { useState, useEffect } from 'react';
import { View, Text, Button, Alert, Share } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import DetailSection from '../components/DetailSection';
import LikeIcon from '../components/LikeIcon';
import UploadedImageDisplay from '../components/UploadedImageDisplay';

import { useTranslation } from 'react-i18next';

const LocationScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { location, fromReview } = route.params || {};

    const { t } = useTranslation();

    const [review, setReview] = useState('');
    const [like, setLike] = useState(false);
    const [photoUri, setPhotoUri] = useState(null);
    const [error, setError] = useState(null);

    const handleDeleteReview = async () => {
        try {
            await AsyncStorage.removeItem(`feedback_${location?.id}`);

            setReview('');
            setLike(false);
            setPhotoUri(null);

            Alert.alert(t('delete.review_title'), t('delete.review'));
        } catch (error) {
            Alert.alert(t('error.error'), t('error.delete_review'));
        }
    };

    const handleShare = async () => {
        try {
            let message = `${t('generic.location')}: ${location?.name}\n`;

            if (location?.description) message += `${t('generic.description')}: ${location.description}\n`;

            if (review) message += `${t('generic.review')}: ${review}\n`;

            await Share.share({ message });
        } catch (e) {
            Alert.alert(t('error.error'), t('error.share'));
        }
    };

    useEffect(() => {
        if(!fromReview) return;

        const unsubscribe = navigation.addListener('beforeRemove', (e) => {
            e.preventDefault();
            navigation.navigate('List');
        });

        return unsubscribe;
    }, [fromReview, navigation]);

    useEffect(() => {
        const loadFeedback = async () => {
            try {
                const data = await AsyncStorage.getItem(`feedback_${location?.id}`);

                if (data) {
                    const parsed = JSON.parse(data);
                    setReview(parsed.review || '');
                    setLike(parsed.like || false);
                    setPhotoUri(parsed.photoUri || null);
                } else {
                    setReview('');
                    setLike(false);
                    setPhotoUri(null);
                }

                setError(null);
            } catch (e) {
                setError(t('error.review'));
            }
        };

        loadFeedback();
    }, [location?.id]);

    useEffect(() => {
        if (location?.name) {
            navigation.setOptions({ title: location.name });
        }
    }, [navigation, location?.name]);

    return (
        <View>

            <Text>{location?.name}</Text>

            <DetailSection
                title={t('generic.description') + ":"}
                information={location?.description}
            />

            {error && (
                <Text style={{ color: 'red', marginVertical: 10 }}>{error}</Text>
            )}
            
            <DetailSection
                title={t('generic.review') + ":"}
                information={review}
            />

            <LikeIcon liked={like}/>

            <UploadedImageDisplay
                uri={photoUri}
                style={{ width: 200, height: 200, marginVertical: 10 }}
            />

            <Button
                title={t('button.map')}
                onPress={() => 
                    navigation.navigate('Map', {
                        latitude: location?.latitude,
                        longitude: location?.longitude,
                        name: location?.name,
                    })
                }
            />

            <Button
                title={t('button.review')}
                onPress={() => navigation.navigate('ReviewScreen', { location })}
            />

            <Button
                title={t('button.delete_review')}
                color="red"
                onPress={handleDeleteReview}
            />

            <Button
                title={t('button.share')}
                onPress={handleShare}
            />

        </View>
    );
};

export default LocationScreen;
