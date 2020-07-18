import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import IntersectionObserverMock from './__mocks__/IntersectionObserverMock'

window.React = require('react')
global.IntersectionObserver = IntersectionObserverMock

configure({ adapter: new Adapter() })