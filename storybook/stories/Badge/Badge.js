import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {withInfo} from '@storybook/addon-info';
import {withKnobs, boolean} from '@storybook/addon-knobs';

import Badge from '../../../src/components/Badge/Badge.jsx';

const stories = storiesOf('Badge', module);

stories.addDecorator(withKnobs);

stories.add('default',
    withInfo('')(() =>
        <Badge
            label='Default'
            onClick={action('Badge clicked!')}/>
    ))

stories.add('with Anchor Tag',
    withInfo('')(() =>
        <Badge
            label='Anchor'
            href='#'
            target='_blank'/>
    ))

stories.add('Rounded',
    withInfo('')(() =>
        <Badge
            label='Rounded'
            pill={boolean('pill', true)}/>
    ));