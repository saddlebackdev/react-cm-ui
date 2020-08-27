import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

// eslint-disable-next-line no-console
const originalWarn = console.warn.bind(console.warn);

beforeAll(() => {
    // eslint-disable-next-line no-console
    console.warn = (msg) => !msg.toString().includes('parentStyleSheet') && originalWarn(msg);
});

afterAll(() => {
    // eslint-disable-next-line no-console
    console.warn = originalWarn;
});
