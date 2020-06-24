export const REPLACE_BACKTICKS_WITH_TAG = (string) => {
    const replacer = (match, p1) => `<code>${p1}</code>`;

    if (!string) {
        return null;
    }

    return string.replace(/`(.*?)`/g, replacer);
};
