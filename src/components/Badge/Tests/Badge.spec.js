import React from 'react';
import {shallow} from 'enzyme';
import Badge from '../Badge';

describe('Badge', () => {
    it('should render children', () => {
        const wrapper = shallow(<Badge label='test test' />);

        expect(wrapper.text()).toBe('test test');
    });
});