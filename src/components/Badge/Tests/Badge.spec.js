import React from 'react';
import {shallow} from 'enzyme';

import Badge from '../Badge';
import badgeTypes from '../badgeType';

describe('Badge', () => {
    it('Should render label', () => {
        const wrapper = shallow(<Badge label='label' />);

        expect(wrapper.text()).toBe('label');
    });

    it('Should not render label', () => {
        const wrapper = shallow(<Badge label='label' />);

        expect(wrapper.text()).not.toBe('not label');
    });

    badgeTypes.forEach(type => {
        it(`Should have specified type class badge-${type}`, () => {
            const wrapper = shallow(<Badge type={type} />);

            expect(wrapper.hasClass(`badge-${type}`)).toEqual(true);
        });
    });
});