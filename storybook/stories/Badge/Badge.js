import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {withInfo} from '@storybook/addon-info';

import Badge from '../../../src/components/Badge/Badge.jsx';

storiesOf('Badge', module)
    .add('default',
        withInfo('')(() =>
            <Badge
                label='Default'
                onClick={action('Badge clicked!')}/>
        ))

    .add('with Anchor Tag',
        withInfo('')(() =>
            <Badge
                label='Anchor'
                href='#'
                target='_blank'/>
        ))

    .add('Rounded',
        withInfo('')(() =>
            <Badge
                label='Rounded'
                pill={true}/>
        ));