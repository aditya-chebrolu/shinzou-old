import React from 'react';
import styles from './styles.module.scss';
import Rocket from '../../icons/Rocket';
const ScrollBar = () => {
  const { line, pin } = styles;
  return (
    <div className={line}>
      <div className={pin}>
        <Rocket height={40} width={40} />
      </div>
    </div>
  );
};

export default ScrollBar;
