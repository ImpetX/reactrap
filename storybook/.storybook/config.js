import {configure} from '@storybook/react';

import '../../public/vendor.css';

function loadStories() {
  require('../stories/index.js');
}

configure(loadStories, module);