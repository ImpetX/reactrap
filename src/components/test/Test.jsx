import React from 'react';

import styles from './css/Test';

const Test = ({name}) => (
    <h2 className={styles.h2}>{name}</h2>
);

export default Test;