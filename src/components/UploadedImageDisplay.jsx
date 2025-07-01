import { Image } from "react-native";

const UploadedImageDisplay = ({ uri, style }) => (
    uri ? (
        <Image source={{ uri }} style={style} />
    ) : null
);

export default UploadedImageDisplay;