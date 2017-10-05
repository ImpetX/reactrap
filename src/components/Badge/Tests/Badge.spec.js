import React from 'react';
import {shallow} from 'enzyme';

import Badge from '../Badge';
import badgeTypes from '../badgeType';

describe('Badge', () => {
    it('Should render label', () => {
        const wrapper = shallow(<Badge label='label' />);

        expect(wrapper.text()).toBe('label');
    });

    it('Should Not render label', () => {
        const wrapper = shallow(<Badge label='label' />);

        expect(wrapper.text()).not.toBe('not label');
    });

    badgeTypes.forEach(type => {
        it(`Should have specified type class badge-${type}`, () => {
            const wrapper = shallow(<Badge type={type} />);

            expect(wrapper.hasClass(`badge-${type}`)).toEqual(true);
        });
    });

    it('Should have class badge-pill', () => {
        const wrapper = shallow(<Badge pill />);

        expect(wrapper.hasClass('badge-pill')).toEqual(true);
    });

    it('Should Not have class badge-pill', () => {
        const wrapper = shallow(<Badge />);

        expect(wrapper.hasClass('badge-pill')).toEqual(false);
    });

    it('Should have anchor tag when href is provided', () => {
        const wrapper = shallow(<Badge href='#' />);

        expect(wrapper.type()).toEqual('a');
    });

    it('Should Not have anchor tag when href is not provided', () => {
        const wrapper = shallow(<Badge />);

        expect(wrapper.type()).not.toEqual('a');
    });

    it('Should respond to the click event', () => {
        console.log = jest.fn();
        const wrapper = shallow(<Badge onClick={() => console.log('Clicked!')}/>);

        wrapper.simulate('click');
        expect(console.log).toHaveBeenCalledWith('Clicked!');
    });
});