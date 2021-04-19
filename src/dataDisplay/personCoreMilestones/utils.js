// eslint-disable-next-line import/prefer-default-export
export const getIconSize = ({ isMobile, iconSize }) => {
    if (!isMobile) {
        return iconSize || 24;
    }

    return iconSize;
};
