import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import enableHooks from 'jest-react-hooks-shallow';

enableHooks(jest);
configure({ adapter: new Adapter() });

/**
 * This magically makes the warning below go away.
 * `Warning: [JSS] Cannot set property 'parentStyleSheet' of undefined`
 * https://stackoverflow.com/questions/66760985/jest-mocking-a-javascript-created-injected-stylesheet
 */
window.CSSStyleSheet.prototype.insertRule = (rule) => {
    const styleElement = document.createElement('style');
    const textNode = document.createTextNode(rule);

    styleElement.appendChild(textNode);
    document.head.appendChild(styleElement);

    return 0;
};
