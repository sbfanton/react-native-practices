import FontAwesome from '@expo/vector-icons/FontAwesome';

export const HomeIcon = ({ size = 40, color = "white", ...props }) => {
    return (
        <FontAwesome name="home" size={size} color={color} {...props} />
    );
};

export const CircleInfoIcon = ({ size = 40, color = "white", ...props }) => {
    return (
        <FontAwesome name="info-circle" size={size} color={color} {...props} />
    );
};