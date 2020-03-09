import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import SearchList from './searchList';
import axios from '../../axios-form';
import UserCard from '../UserCard/userCard';

configure({adapter: new Adapter()});

describe('<SearchList />', () => {

    let wrapper;
    let users;

    beforeAll(async () => {
        await axios.get('/search/?input=test').then((response) => {
            // console.log(response)
            users = response.data;
        }).catch((err) => {
            console.log("*************************")
            console.log(err);
        })
    })

    beforeEach(() => {
        wrapper = shallow(<SearchList users={[]} />);
    })


    it('should render one or more <UserCard> tag', () => {
        wrapper.setProps({users: users})
        // console.log(wrapper.find(UserCard));
        expect(wrapper.find(UserCard)).toHaveLength(1)
    })
})