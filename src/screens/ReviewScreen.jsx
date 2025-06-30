import { useRoute, useNavigation } from "@react-navigation/native";
import useLocationData from "../functions/useLocationData";
import { View, Text, TextInput, Button, Image, TouchableOpacity, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";

const ReviewScreen = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const { location } = route.params || {};
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
        Alert.alert('Gelukt', 'De review is succesvol opgeslagen!');
        navigation.navigate('LocationScreen', { location: location, fromReview: true })
    };

    return (
        <View>
            <Text>{location?.name}</Text>
            <TouchableOpacity onPress={handleLike}>
                <Text>{like ? '❤️' : '🤍'} Like</Text>
            </TouchableOpacity>
            <TextInput
                placeholder="Schrijf een review..."
                value={review}
                onChangeText={handleReviewChange}
                multiline
            />
            <Button title="Foto toevoegen" onPress={pickImage}/>
            {photoUri ? (
                <Image source={{ uri: photoUri }} style={{ width: 200, height: 200, marginTop: 10 }}/>
            ) : null}
            <Button title="Opslaan" onPress={handleSave}/>
        </View>
    );
}

export default ReviewScreen