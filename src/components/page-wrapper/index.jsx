import React from 'react';
import styles from './styles.module.scss';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';

const PageWrapper = ({ children, title }) => {
  const [fl, ...rest] = title;
  const [intersected, setIntersected] = useState(false);
  const intersectionRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersected(entry.isIntersecting);
      },
      { threshold: 0.7 }
    );
    observer.observe(intersectionRef.current);
  }, []);

  return (
    <div className={styles.page}>
      <div
        className={`${styles.head} ${intersected ? styles.anim : styles.no}`}
        ref={intersectionRef}
      >
        <div>{fl}</div>
        <div>{rest}</div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default PageWrapper;
