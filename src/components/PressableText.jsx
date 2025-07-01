import { View, Pressable, Text } from "react-native";

const PressableText = ({ text, onPress }) => (
    <View>
        <Pressable onPress={onPress}>
            <Text>{text}</Text>
        </Pressable>
    </View>
);

export default PressableText;