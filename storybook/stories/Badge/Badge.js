import React from 'react';
import {storiesOf} from '@storybook/react';

import Badge from '../../../src/components/Badge/Badge.jsx';

storiesOf('Badge', module)
    .add('default', () => (
        <Badge
            label='Default'
            onClick={() => {console.log('Badge Clicked')}}/>
    ))

    .add('with Anchor Tag', () => (
        <Badge
            label='Anchor'
            href='#'
            target='_blank'/>
    ))

    .add('Rounded', () => (
        <Badge
            label='Rounded'
            pill={true}/>
    ));