import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import FormSubmission from './FormSubmission';

configure({adapter: new Adapter()});

describe('<FormSubmission />', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<FormSubmission />)
    })

    it('should render one <p> tag with **Your Form is Submitted Properly** text', () => {
        wrapper.setProps({formSubmissionResult: true})
        expect(wrapper.find('p')).toHaveLength(1);
        expect(wrapper.find('p').text()).toEqual('Your Form is Submitted Properly');
    })

    it('should render one <p> tag with **User data is not foun** text', () => {
        wrapper.setProps({searchModel: true})
        expect(wrapper.find('p')).toHaveLength(1);
        expect(wrapper.find('p').text()).toEqual('User data is not found');
    })

    it('should render two <p> tag', () => {
        expect(wrapper.find('p')).toHaveLength(2);
    })
})