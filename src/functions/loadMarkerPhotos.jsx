import AsyncStorage from "@react-native-async-storage/async-storage";

export default async function loadMarkerPhotos(locations) {
    const photos = {};

    for (const loc of locations) {
        const data = await AsyncStorage.getItem(`feedback_${loc.id}`);
        if (data) {
            const parsed = JSON.parse(data);
            if (parsed.photoUri) {
                photos[loc.id] = parsed.photoUri;
            }
        }
    }
    
    return photos;
}