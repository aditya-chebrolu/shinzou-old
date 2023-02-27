import { useRef } from 'react';
import Name from '../../components/name';
import styles from './styles.module.scss';
const Intro = () => {
  const { page } = styles;
  const x = useRef();
  return (
    <div className={page} ref={x}>
      <Name />
    </div>
  );
};

export default Intro;
