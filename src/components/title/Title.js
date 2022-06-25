import React, { useContext, useEffect, useState } from 'react';
import { PageContext } from '../../App';
import classes from './Title.module.scss';

function Title() {
    const { page } = useContext(PageContext);

    const labels = ['<<<<', 'SKILLS', 'WORK', 'OTHERS'];
    const [size, setSize] = useState({ height: '', width: '' });

    useEffect(() => {
        const e = document.getElementById('title-0');
        setSize({ width: e.clientWidth, height: e.clientHeight });
        // console.log(page, e.clientWidth);
    }, []);
    const mobileView = window.innerWidth < 600;
    return (
        <div
            className={classes.body}
            style={{
                width: mobileView ? '' : size.width,
                height: mobileView ? size.height : '',
            }}
        >
            {labels.map((label, idx) => (
                <div
                    key={idx}
                    id={'title-' + idx}
                    className={classes.text}
                    style={{
                        transform: !mobileView
                            ? `translateX(${(page - 1) * size.width}px)`
                            : `translateY(-${(page - 1) * size.height}px)`,
                    }}
                >
                    {label}
                </div>
            ))}
        </div>
    );
}

export default Title;
