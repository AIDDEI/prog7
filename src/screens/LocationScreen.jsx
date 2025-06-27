import { View, Text, Button, Alert, Image, Share } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';

const LocationScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { location, fromReview } = route.params || {};

    const [review, setReview] = useState('');
    const [like, setLike] = useState(false);
    const [photoUri, setPhotoUri] = useState(null);
    const [error, setError] = useState(null)

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
                setError(null)
            } catch (e) {
                setError('Fout bij het laden van de review.')
            }
        };
        loadFeedback();
    }, [location?.id]);

    const handleDeleteReview = async () => {
        try {
            await AsyncStorage.removeItem(`feedback_${location?.id}`);
            setReview('');
            setLike(false);
            setPhotoUri(null);
            Alert.alert('Review verwijderd', 'De review is succesvol verwijderd.');
        } catch (error) {
            Alert.alert('Fout', 'Er is iets mis gegaan bij het verwijderen.');
        }
    };

    const handleShare = async () => {
        try {
            let message = `Location: ${location?.name}\n`;
            if (location?.description) message += `Beschrijving: ${location.description}\n`
            if (review) message += `Review: ${review}\n`;

            await Share.share({ message })
        } catch (e) {
            Alert.alert('Fout', 'Delen mislukt.')
        }
    };

    return (
        <View>
            <Text>{location?.name}</Text>
            <Text>{location?.description}</Text>
            {error && (
                <Text style={{ color: 'red', marginVertical: 10 }}>{error}</Text>
            )}
            {review ? (
                <View>
                    <Text>Review:</Text>
                    <Text>{review}</Text>
                </View>
            ) : null}
            {like ? (
                <Text>❤️</Text>
            ) : null}
            {photoUri ? (
                <Image source={{ uri: photoUri }} style={{ width: 200, height: 200, marginVertical: 10 }} />
            ) : null}
            <Button
                title="Bekijk op de kaart"
                onPress={() => 
                    navigation.navigate('Map', {
                        latitude: location?.latitude,
                        longitude: location?.longitude,
                        name: location?.name,
                    })
                }
            />
            <Button
                title="Schrijf review"
                onPress={() => navigation.navigate('ReviewScreen', { location })}
            />
            <Button
                title="Verwijder review"
                color="red"
                onPress={handleDeleteReview}
            />
            <Button
                title="Deel deze locatie"
                onPress={handleShare}
            />
        </View>
    );
};

export default LocationScreen;
