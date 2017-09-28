import {configure} from '@storybook/react';

import '../../public/vendor.css';

function loadStories() {
  require('../stories/Badge/Badge.js');
}

configure(loadStories, module);