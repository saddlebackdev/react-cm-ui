// eslint-disable-next-line import/prefer-default-export
export const replaceBackticksWithTag = (string) => {
    const replacer = (match, p1) => `<code>${p1}</code>`;

    if (!string) {
        return null;
    }

    return string.replace(/`(.*?)`/g, replacer);
};
