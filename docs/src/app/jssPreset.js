import { jssPreset } from '@material-ui/styles';
// eslint-disable-next-line import/no-unresolved
import { UI_LIBRARY_ROOT_CLASS } from '@saddlebackchurch/react-cm-ui/global/constants';
import { create } from 'jss';
import { isFunction } from 'lodash';

const UI_LIBRARY_ROOT_CLASS_WITH_SPACE = `${UI_LIBRARY_ROOT_CLASS} `;

const jssClassTweaker = {
    onCreateRule: (name, decl, options) => {
        if (name[0] === '@' || (options.parent && options.parent.type === 'keyframes')) {
            return null;
        }

        const plugins = options.jss.plugins.registry;

        // this plugin is first, needs to start from 1 to skip it
        for (let i = 1; i < plugins.onCreateRule.length; i += 1) {
            const rule = plugins.onCreateRule[i](name, decl, options);
            if (rule) {
                if (rule.selectorText?.includes(UI_LIBRARY_ROOT_CLASS_WITH_SPACE) &&
                    isFunction(rule.selectorText?.replaceAll)) {
                    rule.selectorText = rule.selectorText.replaceAll(UI_LIBRARY_ROOT_CLASS_WITH_SPACE, '');
                }

                rule.selectorText = UI_LIBRARY_ROOT_CLASS_WITH_SPACE + rule.selectorText;

                return rule;
            }
        }

        return null;
    },
};

export default function createJssPresets() {
    return create({
        plugins: [
            jssClassTweaker, // must be first
            ...jssPreset().plugins,
        ],
    });
}
