import { useContext } from "react";
import { Image } from "react-native";

import { ThemeContext } from '../css/ThemeContext';
import { createStyles } from '../css/styles';

const UploadedImageDisplay = ({ uri, width, height }) => {
    const { theme } = useContext(ThemeContext);
    const styles = createStyles(theme);

    return uri ? (
        <Image source={{ uri }} style={[styles.image, { width: width, height: height }]} />
    ) : null
};

export default UploadedImageDisplay;