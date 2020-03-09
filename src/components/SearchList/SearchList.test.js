import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import SearchList from './searchList';

configure({adapter: new Adapter()});

describe('<SearchList />', () => {

    let wrapper, users;

    beforeAll(() => {
        
    })

    beforeEach(() => {
        wrapper = shallow(<Logo />)
    })


    it('should render one <img> tag', () => {
        expect(wrapper.find('img')).toHaveLength(1);
    })
})