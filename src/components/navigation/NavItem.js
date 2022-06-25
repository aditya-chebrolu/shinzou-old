import React, { useContext } from 'react';
import { PageContext } from '../../App';
import classes from './NavItem.module.css';

const NavItem = ({ id, hovered, setHovered, icon, label }) => {
    const { changePage } = useContext(PageContext);
    const hoverClass = hovered
        ? hovered === id
            ? classes.hovered
            : classes['not-hovered']
        : '';

    return (
        <div
            className={`${classes.body} ${hoverClass}`}
            onMouseEnter={() => setHovered(id)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => changePage(id)}
        >
            {icon}
        </div>
    );
};

export default NavItem;
