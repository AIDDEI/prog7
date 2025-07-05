import { useState, useEffect } from "react";
import * as Location from "expo-location";

import { useTranslation } from 'react-i18next';

export default function useCurrentLocation() {
    const { t } = useTranslation();

    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        let subscription;

        async function subscribe() {
            let { status } = await Location.requestForegroundPermissionsAsync();

            if (status !== 'granted') {
                setErrorMsg(t('location.denied'));
                return;
            }

            subscription = await Location.watchPositionAsync(
                { accuracy: Location.Accuracy.High, distanceInterval: 5 },
                setLocation
            );
        }

        subscribe();
        return () => {
            if (subscription) subscription.remove();
        };
    }, []);

    return { location, errorMsg };
}