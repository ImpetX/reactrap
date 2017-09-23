import React from 'react';
import {storiesOf} from '@storybook/react';
import Test from '../../src/components/test/Test';

storiesOf('Test', module)
  .add('with text', () => (
    <Test />
  ));