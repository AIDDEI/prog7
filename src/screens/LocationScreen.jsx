import { useState, useEffect, useContext } from 'react';
import { Alert, Share, ScrollView, Text, Linking, View, Dimensions } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import DetailSection from '../components/DetailSection';
import LikeIcon from '../components/LikeIcon';
import UploadedImageDisplay from '../components/UploadedImageDisplay';
import OpeningHours from '../components/OpeningHours.jsx';
import AppButton from '../components/AppButton.jsx';

import { ThemeContext } from '../css/ThemeContext.jsx';
import { createStyles } from '../css/styles.js';
import { useTranslation } from 'react-i18next';

const LocationScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { location, fromReview } = route.params || {};

    const { theme } = useContext(ThemeContext);
    const styles = createStyles(theme);

    const { t } = useTranslation();

    const sectionWidth = Dimensions.get('window').width - 32;
    const sectionHeight = sectionWidth * 2 / 3;

    const [review, setReview] = useState('');
    const [like, setLike] = useState(false);
    const [photoUri, setPhotoUri] = useState(null);
    const [error, setError] = useState(null);

    const addressString = location?.address
        ? `${location.address.street} ${location.address.house_number}, ${location.address.postal_code} ${location.address.city}`
        : '';

    const openWebsite = () => {
        if (location?.website) {
            Linking.openURL(location.website);
        }
    };

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
        <ScrollView style={styles.container}>

            <View style={styles.titleRow}>
                <View style={{ flex: 1 }}>
                    <Text style={styles.title}>{location?.name}</Text>
                    {location?.type && (
                        <Text style={styles.subtitle}>{location.type}</Text>
                    )}
                </View>
                {like && <LikeIcon liked={like}/>}
            </View>

            {photoUri && (
                <UploadedImageDisplay
                    uri={photoUri}
                    width={sectionWidth}
                    height={sectionHeight}
                />
            )}

            {error && (
                <Text style={{ color: 'red', marginVertical: 10 }}>{error}</Text>
            )}

            <DetailSection
                title={t('generic.description') + ":"}
                information={location?.description}
            />

            <DetailSection
                title={t('generic.music') + ":"}
            >

                {location?.music && Array.isArray(location.music) && (
                    <View style={styles.musicList}>
                        {location.music.map((musicStyle, idx) => (
                            <Text style={styles.musicItem} key={idx}>{musicStyle}</Text>
                        ))}
                    </View>
                )}

            </DetailSection>

            <AppButton
                title={t('button.map')}
                onPress={() =>
                    navigation.navigate('Map', {
                        latitude: location?.latitude,
                        longitude: location?.longitude,
                        name: location?.name,
                    })
                }
            />

            <DetailSection
                title={t('generic.review') + ":"}
                information={review}
            />

            <View style={styles.buttonRow}>

                <AppButton
                    title={
                        (!!review || !!photoUri || !!like)
                            ? t('button.edit_review')
                            : t('button.review')
                    }
                    onPress={() => navigation.navigate('ReviewScreen', { location })}
                    style={styles.buttonRowButton}
                />

                {(!!review || !!photoUri || !!like) && (
                    <AppButton
                        title={t('button.delete_review')}
                        onPress={handleDeleteReview}
                        color="red"
                        style={styles.buttonRowButton}
                    />
                )}

            </View>

            <DetailSection
                title={t('generic.address') + ":"}
                information={addressString}
            />

            <OpeningHours openingHours={location?.opening_hours}/>

            <DetailSection
                title={t('generic.website') + ":"}
            >

                {location?.website && (
                    <Text style={styles.website} onPress={openWebsite}>
                        {location.website}
                    </Text>
                )}

            </DetailSection>

            <AppButton
                title={t('button.share')}
                onPress={handleShare}
            />

        </ScrollView>
    );
};

export default LocationScreen;
