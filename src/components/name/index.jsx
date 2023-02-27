import React from 'react';
import styles from './styles.module.scss';
const Name = () => {
  const {
    introContainer,
    dot,
    letter,
    intro,
    container,
    designationContainer,
  } = styles;
  const NAME = 'Aditya Chebrolu';
  const DESIGNATION = 'SOFTWARE ENGINEER';
  const [fn, ln] = NAME.split(' ');

  return (
    <div className={container}>
      <div className={introContainer}>
        <div className={intro}>Hi, I'm</div>
        <div>
          {fn.split('').map((l, idx) => (
            <div
              className={letter}
              style={{ animationDelay: `${idx * 200}ms` }}
            >
              {l}
            </div>
          ))}
        </div>
        <div>
          {ln.split('').map((l, idx) => (
            <span
              className={letter}
              style={{
                animationDelay: `${(idx + fn.length) * 200}ms`,
              }}
            >
              {l}
            </span>
          ))}
          <span
            className={dot}
            style={{ animationDelay: `${(NAME.length + 2) * 200}ms` }}
          >
            .
          </span>
        </div>
      </div>
      <div
        className={designationContainer}
        style={{ animationDelay: `${(NAME.length + 2) * 200}ms` }}
      >
        {DESIGNATION}
      </div>
    </div>
  );
};

export default Name;
