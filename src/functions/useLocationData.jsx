import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function useLocationData(locationId) {
    const [review, setReview] = useState('');
    const [like, setLike] = useState(false);
    const [photoUri, setPhotoUri] = useState(null);

    useEffect(() => {
        if (!locationId) return;

        (async () => {
            const data = await AsyncStorage.getItem(`feedback_${locationId}`);

            if (data) {
                const parsed = JSON.parse(data);
                setReview(parsed.review || '');
                setLike(parsed.like || false);
                setPhotoUri(parsed.photoUri || null);
            }
        })();
    }, [locationId]);

    const saveFeedback = async (newReview, newLike, newPhotoUri) => {
        setReview(newReview);
        setLike(newLike);
        setPhotoUri(newPhotoUri);

        await AsyncStorage.setItem(
            `feedback_${locationId}`,
            JSON.stringify({
                review: newReview,
                like: newLike,
                photoUri: newPhotoUri,
            })
        );
    };
}