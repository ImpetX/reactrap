import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';

import Badge from '../../../src/components/Badge/Badge.jsx';

storiesOf('Badge', module)
    .add('default', () => (
        <Badge
            label='Default'
            onClick={action('Badge clicked!')}/>
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