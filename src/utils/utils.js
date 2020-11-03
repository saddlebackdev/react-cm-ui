import _ from 'lodash';

class Utils {
    static colorEnums() {
        return [
            'action',
            'alert',
            'bright',
            'condition',
            'configuration',
            'disable',
            'highlight',
            'inverse-alternate',
            'nest',
            'primary',
            'secondary',
            'static',
            'subject',
            'success',
            'warning',
        ];
    }

    static getElementType(as, props) {
        if (props && props.href) {
            return 'a';
        }

        return as || 'div';
    }

    static getIncreasingUniqueKey() {
        const now = (new Date().getTime()).toString();
        return now.substring(now.length - 6, now.length) + _.uniqueId();
    }

    static numberToWord(num) {
        const numberToWordMap = {
            1: 'one',
            2: 'two',
            3: 'three',
            4: 'four',
            5: 'five',
            6: 'six',
            7: 'seven',
            8: 'eight',
            9: 'nine',
            10: 'ten',
            11: 'eleven',
            12: 'twelve',
        };

        return numberToWordMap[num];
    }

    static sizeEnums() {
        // Sorry, breaking the alphabetical order here in favor of Large to Small. Deal with it!
        return [
            'xxlarge',
            'xlarge',
            'large',
            'medium',
            'small',
            'xsmall',
            'xxsmall',
        ];
    }

    static themeEnums() {
        return [
            'dark',
            'light',
        ];
    }
}

export default Utils;
