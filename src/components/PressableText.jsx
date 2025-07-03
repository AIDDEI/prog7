import { View, Pressable, Text } from "react-native";

const PressableText = ({ text, onPress, style, textStyle }) => (
    <View style={style}>
        <Pressable onPress={onPress}>
            <Text style={textStyle}>{text}</Text>
        </Pressable>
    </View>
);

export default PressableText;