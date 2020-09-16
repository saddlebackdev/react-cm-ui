import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import enableHooks from 'jest-react-hooks-shallow';

enableHooks(jest);
configure({ adapter: new Adapter() });
