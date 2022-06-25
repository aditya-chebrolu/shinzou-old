import React, { useState } from 'react';
import classes from './Name.module.scss';

function Name() {
    const content = 'Aditya Chebrolu'
        .split('')
        .map((letter, idx) => <span key={idx}>{letter}</span>);

    return (
        <div className={classes.body}>
            <div className={classes.name}>{content}</div>
        </div>
    );
}

export default Name;
